import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

// Query to get all expertises
export const ALL_EXPERTISES_QUERY = defineQuery(`*[_type == "expertises"]{
  _id,
  heading,
  slug,
  tagline,
  excerpt,
  link,
  image {
    asset->{
      _id,
      url
    },
    alt
  }
}`);

// Query to get a specific expertise by slug
export const EXPERTISE_BY_SLUG_QUERY =
  defineQuery(`*[_type == "expertises" && slug.current == $slug][0]{
  _id,
  heading,
  slug,
  tagline,
  excerpt,
  body,
  link,
  image {
    asset->{
      _id,
      url
    },
    alt
  }
}`);

// Query to get featured expertises (e.g., limit to 3)
export const FEATURED_EXPERTISES_QUERY =
  defineQuery(`*[_type == "expertises"][0...3]{
  _id,
  heading,
  slug,
  tagline,
  excerpt,
  link,
  image {
    asset->{
      _id,
      url
    },
    alt
  }
}`);

// Query to get a specific number of expertises
export const EXPERTISES_LIMIT_QUERY =
  defineQuery(`*[_type == "expertises"][0...$limit]{
  _id,
  heading,
  slug,
  tagline,
  excerpt,
  link,
  image
}`);

// Query functions

/**
 * Fetches all expertise entries
 */
export async function getAllExpertises() {
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);
  return expertises;
}

/**
 * Fetches a specific expertise by slug
 * @param slug - The slug.current value to filter by
 */
export async function getExpertiseBySlug(slug: string) {
  const expertise = await client.fetch(EXPERTISE_BY_SLUG_QUERY, { slug });
  return expertise;
}

/**
 * Fetches featured expertise entries (limited to 3)
 */
export async function getFeaturedExpertises() {
  const featuredExpertises = await client.fetch(FEATURED_EXPERTISES_QUERY);
  return featuredExpertises;
}

/**
 * Fetches a specific number of expertise entries
 * @param limit - The maximum number of entries to return
 */
export async function getExpertisesWithLimit(limit: number) {
  const expertises = await client.fetch(EXPERTISES_LIMIT_QUERY, { limit });
  return expertises;
}
