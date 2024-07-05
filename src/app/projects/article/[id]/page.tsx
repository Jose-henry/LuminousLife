import CMSServer from "@/components/project_components/content/cmsserver";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlaiceholder } from "plaiceholder";

type Props = {
  params: {
    id: string;
  };
};

// Helper function to validate image URLs
const isValidImageUrl = (url: string) => {
  return (
    url &&
    (url.startsWith('http://') || url.startsWith('https://'))
  );
};

const fetchData = async (id: string) => {
  const getContent = (await import("@/lib/actions/cms.action")).default;
  try {
    const responseData = await getContent();

    if (!responseData || !Array.isArray(responseData)) {
      throw new Error("Invalid response structure or data is not an array");
    }

    const content = responseData.find((item) => item.id.toString() === id);

    if (content) {
      // Process only the valid image URLs
      const imageKeys = Array.from({ length: 10 }, (_, i) => `image${i + 1}`);
      const images = await Promise.all(
        imageKeys.map(async (imgKey) => {
          const imageUrl = content[imgKey as keyof typeof content] as string;
          if (isValidImageUrl(imageUrl)) {
            try {
              console.log(`Processing image: ${imageUrl}`);
              const buffer = await fetch(imageUrl).then(async (res) => Buffer.from(await res.arrayBuffer()));
              const { base64 } = await getPlaiceholder(buffer);
              return { url: imageUrl, blurDataURL: base64 };
            } catch (error) {
              console.error(`Error processing image ${imageUrl}:`, error);
              return null;
            }
          }
          return null;
        })
      );

      // Filter out null values from images
      content.images = images.filter((img) => img !== null);
      console.log("Content with processed images:", content);
    }

    return content || { title: "No Content", content: "", images: [] }; // Ensure content has images array
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const content = await fetchData(params.id);

  if (!content) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: content.title,
  };
};

export default async function ArticlePage({ params }: Props) {
  const content = await fetchData(params.id);

  if (!content) {
    notFound();
  }

  return <CMSServer content={content} />;
}
