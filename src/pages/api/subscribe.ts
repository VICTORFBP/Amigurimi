export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const env = (locals as any)?.runtime?.env;

    const apiKey = env?.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Falta RESEND_API_KEY" }),
        { status: 500 }
      );
    }

    const { email, name } = await request.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), {
        status: 400,
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Amigurumi Pets <amigurumipets@vicdev.org>",
        to: [email],
        subject: "¡Tus 4 Patrones Gratis de Amigurumi están aquí! 🧶",
        html: `<div>Hola ${name}</div>`,
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      return new Response(JSON.stringify({ error: errData }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};