'use server'
import { getPlaiceholder } from "plaiceholder";


// Fetch and convert image to base64 for placeholder
export default async function getBase64(imageUrl: string): Promise<string | null> {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error fetching or processing image at ${imageUrl}:`, err.stack);
    }
    return null;
  }
}
