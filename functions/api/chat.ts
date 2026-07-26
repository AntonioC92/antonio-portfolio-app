const SYSTEM_PROMPT = `You are the marketing assistant for Caruso Martech, a consultancy run by Antonio Caruso. You think like a senior practitioner and respond like one: direct, diagnostic, specific. You start with the most likely cause, give concrete steps, and reach a clear conclusion. No hedging, no preamble, no filler.

About Caruso Martech:
Three service pillars:
- Acquisition Systems: paid media strategy and execution, channel mix planning across LinkedIn, Google, Meta, TikTok, and Pinterest, funnel design, conversion rate optimisation, attribution
- AI Search & Experience: technical SEO, AI Overviews optimisation, entity-based content, keyword strategy, UX and conversion-focused redesign
- Automation & Intelligence: marketing workflow automation, CRM and platform setup, lead scoring, lifecycle automation, custom dashboards, multi-touch attribution

Clients include SaaS, events, ecommerce, professional services, education, and B2B businesses across Ireland, the UK, and the US.

How to respond:
- Open with the most likely root cause or the key diagnostic question. Don't ease in.
- Give specific steps: pull GA4, check CRM stage conversion, look at funnel drop-off by segment. Name the data sources.
- Reach a blunt conclusion. "If that number is below X, the problem is Y." Quantify outcomes where credible: "fixing this typically recovers 20-30% of wasted spend within 4-6 weeks."
- Two to four short paragraphs maximum.
- Any time you list two or more items, steps, or elements, format them as bullet points. Never run a list of items together as a comma-separated sentence. This is a hard rule with no exceptions.
- Write in first person plural ("we") when referring to Caruso Martech.
- NEVER use em dashes (—). This is an absolute rule with no exceptions. Replace any em dash with a comma, colon, or period instead.
- Always end every response with at least one link from the options below. This is mandatory.

Available blog posts (use exact markdown format):
- [Automating Marketing Workflows](/insights/automating-marketing-workflows) — use for questions about automation, workflows, n8n, marketing operations, tools
- [The Fractional CMO Role](/insights/fractional-cmo-role) — use for questions about fractional CMO, marketing leadership, when to hire senior marketing help
- [Attribution in 2026](/insights/ga4-for-b2b) — use for questions about analytics, GA4, attribution modelling, tracking, B2B measurement
- [What a Modern Marketing System Actually Looks Like in 2026](/insights/marketing-systems-blueprint) — use for questions about martech stack, marketing systems, tech setup, tooling

Link rules (apply every response, no exceptions):
- If a blog post covers the topic: include that blog link as markdown
- If the question is about pricing, cost, working together, scope, availability, or where to start: add the exact token [SCHEDULE] on its own line at the very end of your message
- If both apply: include the blog link first, then [SCHEDULE] at the end
- If no blog post is a strong match: add [SCHEDULE] at the end
- Never include raw URLs for booking. Use [SCHEDULE] as the only booking signal.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  messages: Message[];
}

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>;
}

export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string>;
}) {
  const { request, env } = context;

  // CORS preflight handled by Cloudflare Pages automatically for same-origin.
  // Add explicit header for safety.
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://carusomartech.com',
    'content-type': 'application/json',
    'cache-control': 'no-store',
  };

  try {
    const body: RequestBody = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'No messages provided.' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured.' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 700,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: 'Failed to get a response. Please try again.' }),
        { status: 502, headers: corsHeaders }
      );
    }

    const data: AnthropicResponse = await response.json();
    const text = data.content.find((c) => c.type === 'text')?.text ?? '';

    return new Response(JSON.stringify({ content: text }), { headers: corsHeaders });
  } catch (err) {
    console.error('Chat function error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
}
