import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

// Query to get all posts with basic information
export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to get all post slugs for generating static paths
export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`);

// Query to get a single post by slug with full details
export const POST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to get posts by category
export const POSTS_BY_CATEGORY_QUERY =
  defineQuery(`*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to get featured or latest posts
export const FEATURED_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to get paginated posts
export const PAGINATED_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[$start...$end] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to search posts by title
export const SEARCH_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current) && title match $searchTerm] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

// Query to get related posts (same category)
export const RELATED_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current) && _id != $postId && count((categories[]->_id)[@ in $categoryIds]) > 0] | order(publishedAt desc)[0...4] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->{ 
    _id,
    title,
    slug
  },
  author->{ 
    name,
    image
  }
}`);

export async function getAllPosts() {
  return client.fetch(POSTS_QUERY);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(POST_BY_SLUG_QUERY, { slug });
}

export async function getFeaturedPosts() {
  return client.fetch(FEATURED_POSTS_QUERY);
}

export async function getPaginatedPosts(start: number, end: number) {
  return client.fetch(PAGINATED_POSTS_QUERY, { start, end });
}

export async function getPostsByCategory(categoryId: string) {
  return client.fetch(POSTS_BY_CATEGORY_QUERY, { categoryId });
}
