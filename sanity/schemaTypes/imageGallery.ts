import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageType",
      type: "string",
      title: "Page Type",
      options: {
        list: [
          "home",
          "about",
          "services",
          "contact",
          "blog",
          "news",
          "our work",
        ],
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "pageType",
    },
  },
});
