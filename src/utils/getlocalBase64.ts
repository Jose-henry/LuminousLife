// src/lib/utils/imageUtils.ts
import { getPlaiceholder } from "plaiceholder";

type ImageData = {
  src: string;
  blurredDataUrl?: string;
};

// Fetch and convert image to base64 for placeholder
async function getBase64(imageUrl: string): Promise<string | null> {
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

// Add blurredDataUrls to the list of image URLs
export async function addBlurredDataUrls(imageUrls: string[]): Promise<ImageData[]> {
  const base64Promises = imageUrls.map((url) => getBase64(url));

  // Resolve all promises
  const base64Results = await Promise.all(base64Promises);

  // Combine image URLs with their base64 blurred versions
  return imageUrls.map((url, index) => ({
    src: url,
    blurredDataUrl: base64Results[index] || '', // Assign empty string if conversion fails
  }));
}