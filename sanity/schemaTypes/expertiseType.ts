import { defineField, defineType } from "sanity";

export const expertisesType = defineType({
  name: "expertises",
  type: "document",
  title: "Expertises",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "heading",
      },
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
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "link",
      type: "url",
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
});
