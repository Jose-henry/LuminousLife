// src/components/cms/cmsserver.tsx

'use server';
import CMS from "./cms";

type Props = {
  content: {
    title: string;
    content: string;
    [key: string]: any;
  };
};

const CMSServer = ({ content }: Props) => {
  return <CMS content={content} />;
};

export default CMSServer;
