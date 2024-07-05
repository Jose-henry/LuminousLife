// serverUtils.ts
'use server';

import 'server-only'

// /utils/imageCustom.ts
export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
