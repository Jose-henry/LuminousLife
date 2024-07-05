'use server';
import CMS from "./cms";

type Props = {
  content: {
    title: string;
    content: string;
    images?: Array<{ url: string, blurDataURL: string }>; // Make images optional
    [key: string]: any;
  };
};

const CMSServer = ({ content }: Props) => {
  // Ensure images is always an array to avoid type and rendering issues
  const contentWithImages = { ...content, images: content.images || [] };
  return <CMS content={contentWithImages} />;
};

export default CMSServer;
