export async function onRequestPost(context) {
  try {
    const { request, env } = context;

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
      <h2>New Website Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website Form <automated@restmarkrenovations.com>",
        to: ["info@restmarkrenovations.com"],
        reply_to: email,
        subject: `New website message from ${name}`,
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
