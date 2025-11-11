import { NextRequest, NextResponse } from 'next/server';

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const recaptchaToken = formData.get('recaptcha_token') as string;

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar reCAPTCHA
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECREY_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY no está configurada');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Verificar el token con Google
    const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const recaptchaResponse = await fetch(recaptchaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      }),
    });

    const recaptchaData: RecaptchaResponse = await recaptchaResponse.json();

    // Validar el resultado de reCAPTCHA
    if (!recaptchaData.success) {
      console.error('reCAPTCHA validation failed:', recaptchaData['error-codes']);
      return NextResponse.json(
        { error: 'Verificación reCAPTCHA fallida. Por favor, intenta nuevamente.' },
        { status: 400 }
      );
    }

    // Validar el score (recomendado: >= 0.5)
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');
    if (recaptchaData.score < minScore) {
      console.warn(`reCAPTCHA score too low: ${recaptchaData.score} (minimum: ${minScore})`);
      return NextResponse.json(
        { error: 'Actividad sospechosa detectada. Por favor, intenta nuevamente.' },
        { status: 400 }
      );
    }

    // Si todo está bien, reenviar los datos al PHP
    const phpEndpoint = process.env.CONTACT_PHP_ENDPOINT || 'https://artecinvent.com/contact-smtp-molab.php';
    
    const phpFormData = new FormData();
    phpFormData.append('name', name);
    phpFormData.append('email', email);
    phpFormData.append('message', message);
    // Opcional: también enviar el score para logging en el PHP
    phpFormData.append('recaptcha_score', recaptchaData.score.toString());

    const phpResponse = await fetch(phpEndpoint, {
      method: 'POST',
      body: phpFormData,
    });

    if (!phpResponse.ok) {
      console.error('Error al enviar al PHP:', phpResponse.status, phpResponse.statusText);
      return NextResponse.json(
        { error: 'Error al procesar el formulario. Por favor, intenta nuevamente.' },
        { status: 500 }
      );
    }

    // Retornar éxito
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente',
        score: recaptchaData.score
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API route:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

