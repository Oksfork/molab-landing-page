# Cloudflare Turnstile (formulario de contacto)

## 1. Crear el widget

1. Entrá al [dashboard de Cloudflare](https://dash.cloudflare.com/) → **Turnstile**.
2. Creá un widget para el sitio (hostname de producción y `localhost` para desarrollo si aplica).
3. Copiá la **Site Key** (pública) y la **Secret Key** (solo servidor).

## 2. Claves de prueba (desarrollo local)

Cloudflare documenta claves fijas que siempre pasan o siempre fallan la verificación. Útiles para desarrollo sin crear widgets reales:

- [Server-side validation / Testing](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

## 3. Variables de entorno

En `.env` (o en tu plataforma de deploy / `docker-compose`):

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=tu_site_key
TURNSTILE_SECRET_KEY=tu_secret_key
```

- `NEXT_PUBLIC_*` se expone al navegador (es el comportamiento esperado de la site key).
- `TURNSTILE_SECRET_KEY` solo la usa la API route en el servidor; no la incluyas en el cliente.

Opcional (ya existente):

```env
CONTACT_PHP_ENDPOINT=https://tu-dominio.com/contact-smtp-molab.php
```

## 4. Flujo en la app

1. **Footer**: el componente `@marsidev/react-turnstile` muestra el widget (tema oscuro) y guarda el token al completarse.
2. Al enviar el formulario, se envía `turnstile_token` junto con `name`, `email` y `message`.
3. **`POST /api/contact`**: valida el token con `https://challenges.cloudflare.com/turnstile/v0/siteverify` y, si es válido, reenvía el formulario al endpoint PHP.

## 5. Docker

`docker-compose.yml` ya pasa `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y `TURNSTILE_SECRET_KEY` desde el `.env`.

## 6. Troubleshooting

- **No aparece el widget**: comprobá `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y que el dominio esté autorizado en el widget de Turnstile.
- **"Verificación de seguridad fallida"**: token expirado (reenviá el formulario), clave secreta incorrecta, o hostname no permitido.
- **PHP**: el backend PHP ya no recibe `recaptcha_token` ni `recaptcha_score`; solo los campos del formulario.
