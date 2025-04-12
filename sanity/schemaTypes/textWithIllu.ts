import { defineField, defineType } from "sanity";

export const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "document",
  title: "Text with Illustration",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "pageType",
      type: "string",
      title: "Page Type",
      options: {
        list: ["home", "about", "services", "contact"],
      },
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
