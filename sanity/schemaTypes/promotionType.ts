import { defineField, defineType } from "sanity";

export const promotionType = defineType({
  name: "promotion",
  type: "document",
  title: "Promotion",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "promotionType",
      type: "string",
      title: "Promotion Type",
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
      name: "label",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "promotionType",
    },
  },
});
