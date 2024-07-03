// serverUtils.ts
'use server';

import 'server-only'

export const customLoader = ({ src }: { src: string }) => {
  return src;
};
