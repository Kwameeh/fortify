// Types for Fortify Productions website data

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Type for slug
interface Slug {
  current: string;
  _type: string;
}

// Type for image asset reference
interface AssetReference {
  _ref: string;
  _type: string;
}

// Type for image
interface Image {
  _type: string;
  alt?: string;
  asset: AssetReference;
}

// Type for component reference in pageBuilder
interface ComponentReference {
  _type: string;
  _key: string;
  _ref: string;
}

// Type for image in gallery
interface GalleryImage {
  _type: string;
  _key: string;
  asset: AssetReference;
}

// Hero section type
interface Hero {
  _id: string;
  _originalId: string;
  tagline: string;
  _rev: string;
  _type: string;
  _key: string | null;
  slug: Slug;
  pageType: string;
  heading: string;
  _updatedAt: string;
  image: SanityImageSource;
  _createdAt: string;
}

// Text with illustration section type
interface TextWithIllustration {
  excerpt: string;
  _originalId: string;
  _key: string | null;
  image: SanityImageSource;
  pageType: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  tagline: string;
  _id: string;
  heading: string;
  _rev: string;
}

// Video section type
interface Video {
  _key: string | null;
  _id: string;
  videoLabel: string;
  _updatedAt: string;
  _originalId: string;
  videoType: string;
  _rev: string;
  url: string;
  _createdAt: string;
  _type: string;
}

// Section image overlay type
interface SectionImageOverlay {
  tagline: string;
  _key: string | null;
  _rev: string;
  _originalId: string;
  pageType: string;
  heading: string;
  _updatedAt: string;
  _type: string;
  _createdAt: string;
  _id: string;
  image: SanityImageSource;
}

// Gallery section type
interface Gallery {
  pageType: string;
  _originalId: string;
  _updatedAt: string;
  _id: string;
  _type: string;
  _createdAt: string;
  images: GalleryImage[];
  title: string;
  _key: string | null;
  _rev: string;
  slug: Slug;
}

// Form section type
interface Form {
  _rev: string;
  _updatedAt: string;
  form: string;
  _key: string | null;
  pageType: string;
  _createdAt: string;
  label: string;
  heading: string;
  _type: string;
  _originalId: string;
  _id: string;
}

// Promotion section type
interface Promotion {
  _rev: string;
  _createdAt: string;
  _type: string;
  title: string;
  _updatedAt: string;
  label: string;
  _originalId: string;
  _id: string;
  _key: string | null;
}

// Main page type
export interface Page {
  title: string;
  slug: Slug;
  hero: Hero;
  textWithIllustration: TextWithIllustration;
  video: Video;
  sectionImageOverlay: SectionImageOverlay;
  _id: string;
  pageBuilder: ComponentReference[];
  gallery: Gallery;
  form: Form;
  promotion: Promotion;
}

// Type for the entire CSV data structure
type CSVData = Page[];
