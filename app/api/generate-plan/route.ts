export async function POST(req: Request) {
  const formData = await req.formData();
  const input = String(formData.get("input") || "").trim();

  if (!input) {
    return new Response("Please describe what you want to sell globally.", {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return new Response("OPENROUTER_API_KEY is not configured.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const prompt = `You are Makox, an AI agent built for manufacturing founders, exporters, and factory owners who want to expand globally.

User input:
${input}

Create a practical go-to-market plan. Do not give generic advice. Make assumptions clear when information is missing.

Return the answer in this structure:

# Market Entry Judgment
- Is this opportunity viable?
- Which market or region should be prioritized first?
- What is the biggest risk?

# Channel Strategy
- Amazon / DTC / Distributor / TikTok Shop / Offline channels
- Recommend the best starting path and explain why.

# Product & Positioning
- What should be the first hero SKU or offer?
- What positioning angle should be tested first?

# First-Week Action Plan
- Day 1 to Day 7 concrete actions.

# Immediate First Step
- Give one directly usable action the user can take today.

Tone: clear, practical, founder-facing, and concise.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://aimakox.com",
        "X-Title": "Makox",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(`OpenRouter error: ${errorText}`, {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    const data = await response.json();
    const output = data?.choices?.[0]?.message?.content || "No plan generated. Please try again.";

    return new Response(output, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    return new Response("Failed to generate plan. Please try again.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
