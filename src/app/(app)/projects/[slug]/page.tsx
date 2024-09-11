import { notFound } from "next/navigation";
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import TextContent from "@/components/our_story_components/Text1/textContent";
import styles from '../article.module.css';
import { getBlurDataUrl } from '@/utils/imageUtils';

const payload = await getPayload({
  config: configPromise,
});

export async function generateStaticParams() {
  const posts = await payload.find({
    collection: 'pages',
  });
  return posts.docs.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function Projects({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  });

  if (post.docs.length === 0) {
    notFound();
  }

  const doc = post.docs[0];
  console.log(doc);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  // Handle the image URL safely
  let imageUrl = '';
  if (typeof doc.image === 'string') {
    imageUrl = doc.image;
  } else if (doc.image && 'url' in doc.image) {
    imageUrl = doc.image.url;
  }

  const src = imageUrl ? `${apiUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}` : '';

  // Generate blurDataURL if we have a valid src
  const blurDataURL = src ? await getBlurDataUrl(src) : '';

  // Convert content to a string or pass it as is
  const contentString = typeof doc.content === 'string'
    ? doc.content
    : JSON.stringify(doc.content);

  return (
    <div className={`w-full mt-[73px] bg-white ${styles.main}`}>
      <TextContent
        title={doc.title || ''}
        content={contentString}
        src={src}
        alt={doc.image?.alt || ''}
        blurData={blurDataURL}
        description={doc.image?.description || ''}
      />
    </div>
  );
}
