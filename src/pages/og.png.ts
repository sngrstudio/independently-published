import type { APIRoute } from 'astro'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import DefaultOGTemplate from '~/components/og/default.astro'
import satori from 'satori'
import { html } from 'satori-html'
import sharp from 'sharp'
import { getEntry } from 'astro:content'

const container = await AstroContainer.create()
const site = await getEntry('site', 'site')

const InterNormal = await fetch(
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf'
).then((res) => {
  if (!res.ok) {
    throw new Error(
      `Error acquiring InterNormal font file: ${res.status} ${res.statusText}`
    )
  }
  return res.arrayBuffer()
})

const InterBold = await fetch(
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'
).then((res) => {
  if (!res.ok) {
    throw new Error(
      `Error acquiring InterBold font file: ${res.status} ${res.statusText}`
    )
  }
  return res.arrayBuffer()
})

export const GET: APIRoute = async () => {
  const markup = await container.renderToString(DefaultOGTemplate, {
    props: { site }
  })
  const svg = await satori(html(markup), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: InterNormal,
        weight: 400,
        style: 'normal'
      },
      {
        name: 'Inter',
        data: InterBold,
        weight: 700,
        style: 'normal'
      }
    ]
  })
  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png'
    }
  })
}
