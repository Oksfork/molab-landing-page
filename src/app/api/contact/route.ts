import { NextRequest, NextResponse } from "next/server";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

function getClientIp(request: NextRequest): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || undefined;
  }
  return request.headers.get("x-real-ip") || undefined;
}

async function verifyTurnstileToken(
  token: string,
  secret: string,
  remoteip?: string
): Promise<TurnstileVerifyResponse> {
  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteip) {
    body.set("remoteip", remoteip);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);

    if (!res.ok) {
      return { success: false, "error-codes": ["internal-error"] };
    }

    return (await res.json()) as TurnstileVerifyResponse;
  } catch {
    clearTimeout(timeout);
    return { success: false, "error-codes": ["internal-error"] };
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const turnstileToken = formData.get("turnstile_token") as string;

    if (!name || !email || !message || !turnstileToken) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const verify = await verifyTurnstileToken(
      turnstileToken,
      secretKey,
      getClientIp(request)
    );

    if (!verify.success) {
      console.error(
        "Turnstile validation failed:",
        verify["error-codes"] ?? []
      );
      return NextResponse.json(
        {
          error:
            "Verificación de seguridad fallida. Por favor, intenta nuevamente.",
        },
        { status: 400 }
      );
    }

    const phpEndpoint =
      process.env.CONTACT_PHP_ENDPOINT ||
      "https://artecinvent.com/contact-smtp-molab.php";

    const phpFormData = new FormData();
    phpFormData.append("name", name);
    phpFormData.append("email", email);
    phpFormData.append("message", message);

    const phpController = new AbortController();
    const phpTimeout = setTimeout(() => phpController.abort(), 30_000);

    let phpResponse: Response;
    try {
      phpResponse = await fetch(phpEndpoint, {
        method: "POST",
        body: phpFormData,
        signal: phpController.signal,
      });
    } catch {
      clearTimeout(phpTimeout);
      return NextResponse.json(
        { error: "Error al procesar el formulario. Por favor, intenta nuevamente." },
        { status: 503 }
      );
    }
    clearTimeout(phpTimeout);

    if (!phpResponse.ok) {
      console.error(
        "Error al enviar al PHP:",
        phpResponse.status,
        phpResponse.statusText
      );
      return NextResponse.json(
        { error: "Error al procesar el formulario. Por favor, intenta nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API route:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
