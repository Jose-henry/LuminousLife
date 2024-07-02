import getContentById from "@/lib/actions/cms.action";
import { customLoader } from "@/utils/imageCustom";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

// Generate metadata dynamically based on the params
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const content = await getContentById(params.id);

  if (!content) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: content.title,
  };
};

// Generate static parameters for dynamic routes
export const generateStaticParams = async () => {
  const allData = await fetch(
    "https://script.google.com/macros/s/AKfycbz83dxhIzX0ZmawbxFx_jaS0fT_yl1usZkHFHsWFNl0f5AwsVbw4sU8utXlPbO399XVng/exec"
  );
  const data = await allData.json();

  if (!data || !Array.isArray(data)) {
    console.warn("No data available to generate static params");
    return [];
  }

  return data.map((post: any) => ({
    id: post.id.toString(),
  }));
};

// Component to render the dynamic article page
export default async function Article({ params }: Props) {
  const content = await getContentById(params.id);

  if (!content) {
    notFound();
  }
  console.log("Content to render:", content);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
      {Array.from({ length: 10 }, (_, i) => `image${i + 1}`).map((imgKey, index) => {
        const imageUrl = content[imgKey as keyof typeof content] as string;

        // Check if image URL is valid
        if (imageUrl && imageUrl.startsWith("http")) {
          return (
            <Image
              key={index}
              src={imageUrl || ""}
              alt={`Image ${index + 1}`}
              width={600}
              height={400}
              // loader={customLoader} // Comment this line out
              quality={100}
            />

          );
        }
        return null;
      })}
    </div>
  );
}
