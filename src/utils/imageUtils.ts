'use server'
import { getPlaiceholder } from 'plaiceholder'


export async function getBlurDataUrl(imageUrl: string): Promise<string> {
  try {
    const res = await fetch(imageUrl)
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (e) {
    console.error('Error generating blur data URL:', e)
    return ''
  }
}