import { clientFetch } from "./client";
import {
  POSTS_QUERY,
  POSTS_SLUGS_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  FEATURED_POSTS_QUERY,
} from "../queries/posts";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
  }>;
  author?: {
    name: string;
    image: any;
  };
  body?: any;
}

export interface PostSlug {
  slug: string;
}

/**
 * Fetch all posts
 */
export async function getPosts() {
  return clientFetch({ query: POSTS_QUERY, tags: ["post"] });
}

/**
 * Fetch all post slugs (for generating static paths)
 */
export async function getPostSlugs() {
  return clientFetch({ query: POSTS_SLUGS_QUERY, tags: ["post"] });
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string) {
  return clientFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    tags: [`post:${slug}`],
  });
}

/**
 * Fetch posts by category ID
 */
export async function getPostsByCategory(categoryId: string) {
  return clientFetch({
    query: POSTS_BY_CATEGORY_QUERY,
    params: { categoryId },
    tags: [`category:${categoryId}`, "post"],
  });
}

/**
 * Fetch featured posts (or latest posts)
 */
export async function getFeaturedPosts() {
  return clientFetch({ query: FEATURED_POSTS_QUERY, tags: ["post"] });
}
