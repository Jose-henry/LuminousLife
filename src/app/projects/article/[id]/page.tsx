import CMSServer from "@/components/project_components/content/cmsserver";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

// Fetch data based on the id
const fetchData = async (id: string) => {
  const getContent = (await import("@/lib/actions/cms.action")).default;
  try {
    const responseData = await getContent();

    if (!responseData || !Array.isArray(responseData)) {
      throw new Error("Invalid response structure or data is not an array");
    }

    // Find the content matching the id
    const content = responseData.find((item) => item.id.toString() === id);

    return content || null; // Return the found content or null if not found
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null on error
  }
};

// Generate metadata dynamically based on the params
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

// Generate static parameters for dynamic routes
export const generateStaticParams = async () => {
  const getContent = (await import("@/lib/actions/cms.action")).default;
  const data = await getContent();

  if (!Array.isArray(data) || data.length === 0) {
    console.warn("No data available to generate static params");
    return [];
  }

  return data.map((post) => ({
    id: post.id.toString(),
  }));
};

export default async function ArticlePage({ params }: Props) {
  // Fetch the content for the given id
  const content = await fetchData(params.id);

  if (!content) {
    // If no content is found, show a 404 page
    notFound();
  }

  // Render the CMSServer component with the fetched content
  return <CMSServer content={content} />;
}
