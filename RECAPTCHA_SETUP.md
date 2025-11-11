# Configuración de Google reCAPTCHA v3

Este proyecto utiliza Google reCAPTCHA v3 para proteger el formulario de contacto contra spam.

## Pasos para configurar

### 1. Obtener las claves de reCAPTCHA

1. Ve a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Haz clic en "Crear" para registrar un nuevo sitio
3. Completa el formulario:
   - **Etiqueta**: Nombre descriptivo (ej: "Molab Landing Page")
   - **Tipo de reCAPTCHA**: Selecciona **reCAPTCHA v3**
   - **Dominios**: Agrega tus dominios (ej: `molab.app`, `localhost` para desarrollo)
   - Acepta los términos y condiciones
4. Copia la **Site Key** y la **Secret Key**

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Clave pública (visible en el cliente)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui

# Clave secreta (solo en el servidor - NO debe estar en el cliente)
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui

# Score mínimo aceptado (opcional, por defecto 0.5)
RECAPTCHA_MIN_SCORE=0.5

# Endpoint del PHP que procesa el formulario (opcional)
CONTACT_PHP_ENDPOINT=https://artecinvent.com/contact-smtp-molab.php
```

**Nota**: 
- La `NEXT_PUBLIC_` es necesaria para que Next.js exponga la variable al cliente
- `RECAPTCHA_SECRET_KEY` NUNCA debe estar en el cliente, solo en el servidor

### 3. Para producción con Docker

Si usas Docker, puedes pasar la variable de entorno de dos formas:

**Opción 1: Archivo .env**
Crea un archivo `.env` en la raíz del proyecto:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
RECAPTCHA_MIN_SCORE=0.5
CONTACT_PHP_ENDPOINT=https://artecinvent.com/contact-smtp-molab.php
```

**Opción 2: Variable de entorno del sistema**
```bash
export NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
docker compose up -d
```

### 4. Cómo funciona la validación

La validación se realiza automáticamente en la API route de Next.js (`/api/contact`):

1. **Frontend**: El hook `useReCaptcha` genera un token cuando el usuario envía el formulario
2. **API Route**: La ruta `/api/contact` valida el token con Google usando la Secret Key
3. **Validación del Score**: Si el score es >= 0.5 (configurable), se reenvían los datos al PHP
4. **PHP**: El PHP solo recibe formularios ya validados

**Flujo completo:**
```
Usuario → Formulario → reCAPTCHA Token → API Route (/api/contact) 
→ Validación con Google → Si score OK → PHP (contact-smtp-molab.php)
```

### 5. Validación en el PHP (opcional)

El PHP ya recibe formularios validados, pero si quieres una capa adicional de seguridad, puedes validar también ahí:

```php
<?php
function verifyRecaptcha($token, $secretKey) {
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secretKey,
        'response' => $token
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $json = json_decode($result);
    
    return $json->success && $json->score >= 0.5; // Score mínimo recomendado: 0.5
}

// En tu script de procesamiento:
$recaptchaToken = $_POST['recaptcha_token'] ?? '';
$secretKey = 'tu_secret_key_aqui';

if (!verifyRecaptcha($recaptchaToken, $secretKey)) {
    http_response_code(400);
    echo json_encode(['error' => 'Verificación reCAPTCHA fallida']);
    exit;
}

// Continuar con el procesamiento del formulario...
?>
```

## Cómo funciona

- **reCAPTCHA v3** es invisible y no interrumpe la experiencia del usuario
- Se ejecuta automáticamente cuando el usuario intenta enviar el formulario
- Genera un token que se envía a la API route de Next.js
- La API route valida el token con Google usando la Secret Key (segura en el servidor)
- Solo si el score es aceptable, se reenvían los datos al PHP
- El PHP recibe también el score en `recaptcha_score` para logging opcional

## Ventajas de esta implementación

✅ **Seguridad**: La Secret Key nunca está expuesta al cliente  
✅ **Validación centralizada**: Toda la lógica de reCAPTCHA está en Next.js  
✅ **Flexibilidad**: Puedes cambiar el endpoint PHP sin tocar el frontend  
✅ **Logging**: El score se puede enviar al PHP para análisis

## Solución de problemas

- **Error "reCAPTCHA no está cargado"**: Verifica que la `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` esté configurada correctamente
- **El formulario no se envía**: Revisa la consola del navegador para ver errores
- **Validación falla en el backend**: Asegúrate de usar la Secret Key correcta y verificar el score (recomendado: >= 0.5)

