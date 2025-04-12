import { defineField, defineType } from "sanity";

export const formType = defineType({
  name: "form",
  type: "document",
  fields: [
    defineField({
      name: "label",
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
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "form",
      type: "string",
      description: "Select form type",
      options: {
        list: ["newsletter", "register ", "contact"],
      },
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "pageType",
    },
  },
});
