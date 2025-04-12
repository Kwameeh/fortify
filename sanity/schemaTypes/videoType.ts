import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  type: "document",
  fields: [
    defineField({
      name: "videoLabel",
      type: "string",
    }),
    defineField({
      name: "videoType",
      type: "string",
      title: "Video Type",
      options: {
        list: ["home", "about", "services", "contact"],
      },
    }),
    defineField({
      name: "url",
      type: "string",
      title: "URL",
    }),
  ],
  preview: {
    select: {
      title: "videoLabel",
      subtitle: "videoType",
    },
  },
});
