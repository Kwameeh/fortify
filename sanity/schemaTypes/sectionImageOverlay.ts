import { defineField, defineType } from "sanity";

export const sectionImageOverlay = defineType({
  name: "sectionImageOverlay",
  type: "document",
  title: "Image overlay text",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
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
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "pageType",
      media: "image",
    },
  },
});
