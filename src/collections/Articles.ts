import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: "title"
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
        name: "thumbnail",
        label: "Thumbnail",
        type: "upload",
        relationTo: "media",
        required: true
    },
    {
        name: "category",
        label: "Category",
        type: "text",
        required: true
    },
    {
        name: "views",
        label: "Views",
        type: "number",
    },
    {
        name: 'content',
        label: "Content",
        type: 'richText',
    },
  ],
}