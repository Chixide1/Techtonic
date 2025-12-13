import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { defaultEditorFeatures, HeadingFeature, 
  HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Articles } from './collections/Articles'
import { azureStorage } from '@payloadcms/storage-azure'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Articles],
  editor: lexicalEditor({
    features: [
      ...defaultEditorFeatures.filter( feature => feature.key !== "heading"),
      HeadingFeature({
        enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6']
      }),
      HTMLConverterFeature({}),
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({ 
    url: process.env.DATABASE_URI || '',
    connectOptions: {
      dbName: "techtonic",
    },
    transactionOptions: false,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    azureStorage({
      collections: {
        media: true,
      },
      allowContainerCreate: true,
      baseURL: process.env.AZURE_STORAGE_ACCOUNT_BASEURL,
      connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
      containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    }),
  ],
  indexSortableFields: true,
})
