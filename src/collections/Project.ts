import type { CollectionConfig, FieldHook } from 'payload';
import { revalidateTag } from 'next/cache';

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }: any) => {
    if (typeof value === 'string') {
      return format(value);
    }

    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData);
    }

    return value;
  };

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    write: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [formatSlug('title')], // Corrected fallback field to 'title'
      },
    },
  ],
};
