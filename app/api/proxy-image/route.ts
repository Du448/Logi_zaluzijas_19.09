import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const target = url.searchParams.get('url')
  if (!target) {
    return new Response('Missing url', { status: 400 })
  }

  try {
    const upstream = await fetch(target, {
      // Mimic a normal browser image request from localhost
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'http://localhost:3000/',
        'Origin': 'http://localhost:3000'
      },
      // Do not cache at server while testing
      cache: 'no-store',
    })

    if (!upstream.ok) {
      return new Response(`Upstream error ${upstream.status}`, { status: upstream.status })
    }

    const contentType = upstream.headers.get('content-type') || 'application/octet-stream'
    const data = await upstream.arrayBuffer()

    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store'
      }
    })
  } catch (err) {
    return new Response('Proxy fetch failed', { status: 502 })
  }
}
