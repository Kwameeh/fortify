import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "document",
  title: "Project Information",
  fields: [
    defineField({
      name: "projectname",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "projectname",
      },
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "services",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "expertises" }],
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
  ],
});
