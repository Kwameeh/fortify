import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "document",
  title: "Hero",
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
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: "heading",
      subtitle: "pageType",
      media: "image",
    },
  },
});
