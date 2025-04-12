import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Builder Components",
      description:
        "Add, edit, and reorder page sections by selecting from the available components below",
      of: [
        defineField({
          name: "hero",
          type: "reference",
          title: "Hero Section",

          to: [{ type: "hero" }],
        }),
        defineField({
          name: "textWithIllustration",
          type: "reference",
          title: "Text with Illustration",
          to: [{ type: "textWithIllustration" }],
        }),
        defineField({
          name: "galleryReference",
          type: "reference",
          title: "Gallery Reference",
          to: [{ type: "gallery" }],
        }),
        defineField({
          name: "form",
          type: "reference",
          title: "Form Component",
          to: [{ type: "form" }],
        }),
        defineField({
          name: "videoReference",
          type: "reference",
          title: "Video Reference",
          to: [{ type: "video" }],
        }),
        defineField({
          name: "callToAction",
          type: "reference",
          title: "Call to Action",
          to: [{ type: "promotion" }],
        }),
        defineField({
          name: "sectionImageOverlay",
          type: "reference",
          title: "Section with Image Overlay",
          to: [{ type: "sectionImageOverlay" }],
        }),
      ],
    }),
  ],
});
