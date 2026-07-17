import type { MetadataRoute } from 'next'

const BASE_URL = 'https://vestalux.lv'

// Neindeksējamas iekšējās lapas (grozs, meklēšana, API)
const DISALLOW = ['/grozs', '/meklesana', '/api/']

// AI meklētāju un LLM boti - eksplicīti atļauti, lai saturs būtu pieejams
// ChatGPT Search, Claude, Perplexity, Google AI u.c. atbildēs.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'CCBot',
  'meta-externalagent',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
