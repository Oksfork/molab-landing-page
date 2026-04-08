import { NextRequest, NextResponse } from "next/server";

function joinUrl(base: string, path: string) {
  const trimmedBase = base.replace(/\/+$/, "");
  const trimmedPath = path.replace(/^\/+/, "");
  return `${trimmedBase}/${trimmedPath}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
    };

    const name = (body?.name ?? "").trim();
    const email = (body?.email ?? "").trim();
    const turnstile_token = `${process.env.TURNSTILE_SECRET_KEY}` || "";

    if (!name || !email || !turnstile_token) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const apiBase = process.env.NEXT_PUBLIC_API_DEMO;
    if (!apiBase) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_API_DEMO no está configurada" },
        { status: 500 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);

    let upstream: Response;
    try {
      const origin = request.headers.get("origin") || "";
      const referer = request.headers.get("referer") || "";
      const forwardedFor = request.headers.get("x-forwarded-for") || "";
      const forwardedProto = request.headers.get("x-forwarded-proto") || "";
      const forwardedHost = request.headers.get("x-forwarded-host") || "";
      const host = request.headers.get("host") || "";

      upstream = await fetch(joinUrl(apiBase, "/api/demo/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(origin ? { Origin: origin } : {}),
          ...(referer ? { Referer: referer } : {}),
          ...(forwardedFor ? { "X-Forwarded-For": forwardedFor } : {}),
          ...(forwardedProto ? { "X-Forwarded-Proto": forwardedProto } : {}),
          ...(forwardedHost
            ? { "X-Forwarded-Host": forwardedHost }
            : host
              ? { "X-Forwarded-Host": host }
              : {}),
        },
        body: JSON.stringify({ name, email, turnstile_token }),
        signal: controller.signal,
      });
    } catch {
      clearTimeout(timeout);
      return NextResponse.json(
        { error: "No se pudo contactar el servicio. Intenta nuevamente." },
        { status: 503 }
      );
    }
    clearTimeout(timeout);

    const contentType = upstream.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await upstream.json().catch(() => null)
      : await upstream.text().catch(() => null);

    return NextResponse.json(payload ?? { ok: upstream.ok }, {
      status: upstream.status,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

