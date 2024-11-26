import { lexicalHTML } from '@payloadcms/richtext-lexical'
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
        required: true,
        displayPreview: true
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
        defaultValue: 0,
        required: true
    },
    {
        name: 'sections',
        labels: {singular: "Section", plural: "Sections"},
        type: "array",
        fields: [
          {
            name: "topic",
            label: "Topic",
            type: "text",
            required: true
          },
          {
            name: "content",
            label: "Content",
            type: "richText",
            required: true
          },
          lexicalHTML("content", {name: "content_html"})
        ]
    },
  ],
}