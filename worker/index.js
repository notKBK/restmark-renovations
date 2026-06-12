export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API route for the contact form
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContactForm(request, env);
    }

    // If someone visits /api/contact in the browser with GET
    if (url.pathname.startsWith("/api/contact")) {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    // Everything else serves the React website
    return env.ASSETS.fetch(request);
  },
};

async function handleContactForm(request, env) {
  try {
    const data = await request.json();

    const name = data.name?.trim();
    const email = data.email?.trim();
    const phone = data.phone?.trim();
    const message = data.message?.trim();

    if (!name || !email || !message) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    if (message.length > 3000) {
      return jsonResponse({ error: "Message too long" }, 400);
    }

    const html = `
  <div style="
    margin: 0;
    padding: 0;
    background-color: #f4f1ec;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100%;
  ">
    <div style="
      width: 100%;
      max-width: 620px;
      margin: 0 auto;
      padding: 10px 6px;
      box-sizing: border-box;
    ">
      <div style="
        background-color: #111111;
        color: #ffffff;
        padding: 18px 16px;
        border-radius: 12px 12px 0 0;
        box-sizing: border-box;
      ">
        <div style="
          font-size: 12px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: #c9a45c;
          font-weight: 700;
          margin-bottom: 6px;
        ">
          RestMark Renovations
        </div>

        <h1 style="
          margin: 0;
          font-size: 18px;
          line-height: 1.25;
          font-weight: 700;
        ">
          New Form Submission
        </h1>
      </div>

      <div style="
        background-color: #ffffff;
        padding: 16px 14px;
        border: 1px solid #e7e2d8;
        border-top: none;
        border-radius: 0 0 12px 12px;
        box-sizing: border-box;
      ">
        <div style="
          margin-bottom: 11px;
          padding-bottom: 11px;
          border-bottom: 1px solid #eeeeee;
        ">
          <div style="
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            color: #777777;
            margin-bottom: 5px;
            font-weight: 700;
          ">
            Name
          </div>
          <div style="
            font-size: 17px;
            line-height: 1.35;
            color: #111111;
            font-weight: 700;
            word-break: break-word;
          ">
            ${escapeHtml(name)}
          </div>
        </div>

        <div style="
          margin-bottom: 11px;
          padding-bottom: 11px;
          border-bottom: 1px solid #eeeeee;
        ">
          <div style="
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            color: #777777;
            margin-bottom: 5px;
            font-weight: 700;
          ">
            Email
          </div>
          <div style="
            font-size: 15px;
            line-height: 1.35;
            color: #111111;
            word-break: break-word;
          ">
            <a href="mailto:${escapeHtml(email)}" style="
              color: #111111;
              text-decoration: none;
              font-weight: 700;
            ">
              ${escapeHtml(email)}
            </a>
          </div>
        </div>

        <div style="
          margin-bottom: 11px;
          padding-bottom: 11px;
          border-bottom: 1px solid #eeeeee;
        ">
          <div style="
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            color: #777777;
            margin-bottom: 5px;
            font-weight: 700;
          ">
            Phone
          </div>
          <div style="
            font-size: 15px;
            line-height: 1.35;
            color: #111111;
            word-break: break-word;
          ">
            <a href="tel:${escapeHtml(phone || "")}" style="
              color: #111111;
              text-decoration: none;
              font-weight: 700;
            ">
              ${escapeHtml(phone || "Not provided")}
            </a>
          </div>
        </div>

        <div style="
          margin-left: -10px;
          margin-right: -10px;
        ">
          <div style="
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            color: #777777;
            margin-bottom: 7px;
            font-weight: 700;
            padding-left: 10px;
            padding-right: 10px;
          ">
            Project Details
          </div>
          <div style="
            font-size: 14px;
            line-height: 1.55;
            color: #222222;
            background-color: #f8f6f1;
            border: 1px solid #eee8dc;
            border-radius: 9px;
            padding: 12px 10px;
            word-break: break-word;
            box-sizing: border-box;
            width: 100%;
          ">
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </div>
        </div>
      </div>
    </div>
  </div>
`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website Form <automated@restmarkrenovations.com>",
        to: ["bencooney1212@gmail.com", "info@restmarkrenovations.com"],
        reply_to: email,
        subject: `${name} filled out the form.`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend error:", errorText);
      return jsonResponse({ error: "Email failed" }, 500);
    }

    return jsonResponse({ success: true }, 200);
  } catch (error) {
    console.error(error);
    return jsonResponse({ error: "Server error" }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
