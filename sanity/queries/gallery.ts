import { groq } from "next-sanity";
import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

// GROQ query to fetch all galleries
export const ALL_GALLERIES_QUERY = defineQuery(
  groq`*[_type == "gallery" && defined(slug.current)] {
    _id,
    title,
    pageType,
    slug,
    "imageCount": count(images)
  }`
);

// GROQ query to fetch galleries by page type
export const GALLERIES_BY_PAGE_TYPE_QUERY = defineQuery(
  groq`*[_type == "gallery" && pageType == $pageType] {
    _id,
    title,
    pageType,
    slug,
    "imageCount": count(images)
  }`
);

// GROQ query to fetch a gallery by slug
export const GALLERY_BY_SLUG_QUERY = defineQuery(
  groq`*[_type == "gallery" && slug.current == $slug][0] {
    _id,
    title,
    pageType,
    slug,
    images[] {
      _key,
      asset->,
      alt
    }
  }`
);

// GROQ query to fetch all gallery slugs for static path generation
export const GALLERY_SLUGS_QUERY = defineQuery(
  groq`*[_type == "gallery" && defined(slug.current)] {
    "slug": slug.current
  }`
);

// GROQ query to fetch featured galleries (limited to 3)
export const FEATURED_GALLERIES_QUERY = defineQuery(
  groq`*[_type == "gallery" && defined(slug.current)][0...3] {
    _id,
    title,
    pageType,
    slug,
    "featuredImage": images[0] {
      _key,
      asset->,
      alt
    }
  }`
);

// Function to fetch all galleries
export async function getAllGalleries() {
  return await client.fetch(ALL_GALLERIES_QUERY);
}

// Function to fetch galleries by page type
export async function getGalleriesByPageType(pageType: string) {
  return await client.fetch(GALLERIES_BY_PAGE_TYPE_QUERY, { pageType });
}

// Function to fetch gallery by slug
export async function getGalleryBySlug(slug: string) {
  const gallery = await client.fetch(GALLERY_BY_SLUG_QUERY, { slug });
  return gallery;
}

// Function to fetch all gallery slugs
export async function getAllGallerySlugs() {
  return await client.fetch(GALLERY_SLUGS_QUERY);
}

// Function to fetch featured galleries
export async function getFeaturedGalleries() {
  return await client.fetch(FEATURED_GALLERIES_QUERY);
}
