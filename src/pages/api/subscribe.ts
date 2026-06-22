export const prerender = false;
import type { APIRoute } from "astro";

const apiKey = import.meta.env.RESEND_API_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta RESEND_API_KEY" }), { status: 500 });
    }

    const { email, name } = await request.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Amigurumi Pets <amigurumipets@vicdev.org>",
        to: [email],
        subject: "¡Tus 4 Patrones Gratis de Amigurumi están aquí! 🧶",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; background-color: #fff;">
          <div style="background-color: #d81b60; padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">¡Hola ${name}! 👋</h1>
            <p style="color: #fdf2f8; font-size: 16px; margin-top: 10px; margin-bottom: 0;">Aquí están tus regalos exclusivos</p>
          </div>
          <div style="padding: 30px; background-color: #fdf2f8; border: 1px solid #fbcfe8; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a; margin-top: 0;">Gracias por suscribirte. ¡Estamos muy felices de que quieras tejer amigurumis con nosotros!</p>
            <p style="font-size: 16px; line-height: 1.6; color: #4a4a4a;">Como lo prometido es deuda, aquí tienes tus <strong>4 patrones gratuitos en PDF</strong>. Haz clic en las imágenes o en los botones para descargarlos directamente desde Google Drive.</p>
            
            <div style="margin-top: 35px;">
              <!-- Fila 1: Abeja y Ballenita -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48%" valign="top" style="text-align: center; background: white; padding: 20px 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(216,27,96,0.05); border: 1px solid #fce4ec;">
                    <a href="https://drive.google.com/file/d/1x2TElSI8i4iQ6lbrSJysgSu04cvSaXvy/view?usp=drive_link" style="text-decoration: none; color: #333;">
                      <img src="https://drive.google.com/thumbnail?id=1x2TElSI8i4iQ6lbrSJysgSu04cvSaXvy&sz=w400" alt="Patrón Abeja" style="width: 100%; max-width: 180px; height: auto; border-radius: 8px; border: 1px solid #f3f4f6; margin-bottom: 15px;" />
                      <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #d81b60;">Abejita Meli</h3>
                      <div style="background-color: #f59e0b; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">
                        Descargar PDF
                      </div>
                    </a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" valign="top" style="text-align: center; background: white; padding: 20px 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(216,27,96,0.05); border: 1px solid #fce4ec;">
                    <a href="https://drive.google.com/file/d/1Gz9lMQuWvoEOt6nrO_EfuvouuB9JVMX3/view?usp=drive_link" style="text-decoration: none; color: #333;">
                      <img src="https://drive.google.com/thumbnail?id=1Gz9lMQuWvoEOt6nrO_EfuvouuB9JVMX3&sz=w400" alt="Patrón Ballenita" style="width: 100%; max-width: 180px; height: auto; border-radius: 8px; border: 1px solid #f3f4f6; margin-bottom: 15px;" />
                      <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #d81b60;">Ballenita</h3>
                      <div style="background-color: #f59e0b; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">
                        Descargar PDF
                      </div>
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fila 2: Bosque venado y Perro -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="48%" valign="top" style="text-align: center; background: white; padding: 20px 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(216,27,96,0.05); border: 1px solid #fce4ec;">
                    <a href="https://drive.google.com/file/d/1rP4nqLl_y9CFOjWjFMBj9LTummfyBFrg/view?usp=drive_link" style="text-decoration: none; color: #333;">
                      <img src="https://drive.google.com/thumbnail?id=1rP4nqLl_y9CFOjWjFMBj9LTummfyBFrg&sz=w400" alt="Patrón Bosque Venado" style="width: 100%; max-width: 180px; height: auto; border-radius: 8px; border: 1px solid #f3f4f6; margin-bottom: 15px;" />
                      <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #d81b60;">Bosque Venado</h3>
                      <div style="background-color: #f59e0b; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">
                        Descargar PDF
                      </div>
                    </a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" valign="top" style="text-align: center; background: white; padding: 20px 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(216,27,96,0.05); border: 1px solid #fce4ec;">
                    <a href="https://drive.google.com/file/d/1JIe8vZGfEPBs52DuaWeivJoOkrTHVZqo/view?usp=drive_link" style="text-decoration: none; color: #333;">
                      <img src="https://drive.google.com/thumbnail?id=1JIe8vZGfEPBs52DuaWeivJoOkrTHVZqo&sz=w400" alt="Patrón Perro" style="width: 100%; max-width: 180px; height: auto; border-radius: 8px; border: 1px solid #f3f4f6; margin-bottom: 15px;" />
                      <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #d81b60;">Perro Schnauzer</h3>
                      <div style="background-color: #f59e0b; color: white; padding: 10px 15px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 13px; display: inline-block;">
                        Descargar PDF
                      </div>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            
            <hr style="border: none; border-top: 1px solid #fbcfe8; margin: 35px 0 25px 0;" />
            <p style="font-size: 15px; line-height: 1.5; color: #666; margin-bottom: 5px;">¡Feliz tejido!</p>
            <p style="font-size: 16px; font-weight: bold; color: #d81b60; margin-top: 0;">El equipo de Amigurumi Pets</p>
          </div>
        </div>
      `,
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      return new Response(JSON.stringify({ error: errData }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
