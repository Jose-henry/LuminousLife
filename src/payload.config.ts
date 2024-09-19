// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Project'
import { ProjectMedia } from './collections/projectMedia'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, ProjectMedia],
  upload: {
    limits: {
      fileSize: (50000000), // 5 MB, written in bytes
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [s3Storage({ 
    collections: {
      [Media.slug || ProjectMedia.slug]: {
        disableLocalStorage: true,  // Use cloud storage exclusively
        // disablePayloadAccessControl: false,  // Defaults to false, so access control is still applied
        prefix: 'media',
      },
    },
    bucket: process.env.S3_BUCKET || '',
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.S3_SECRET_KEY || '',
      },
      region: process.env.S3_REGION || '',
      endpoint: process.env.S3_ENDPOINT || '',
      forcePathStyle: true,
      // ... Other S3 configuration options
    },
   }),
  ], /*  process.env.BLOB_READ_WRITE_TOKEN
  ? [
      vercelBlobStorage({
        collections: {
          [Media.slug]: true,
        },
        token: process.env.BLOB_READ_WRITE_TOKEN || '',
      }),
    ]
  :  [], //you can have more than one storage plugin blob and/or aws and/or supabase etc
  //now i dont need the media folder anymore */
})
