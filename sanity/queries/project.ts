import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

export const ALL_PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]{
  _id, 
  projectname, 
  slug,
  tagline,
  services[]->{
    _id,
    name
  },
 
  excerpt,
  location,
  mainImage,
  Images[]{
    ...,
    asset->{
      url
    }
  }
}`);

export const PROJECT_BY_SLUG_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,
  projectname,
  slug,
  tagline,
  services[]->{
    _id,
    name
  },
  excerpt,
  description,
  location,
  url,
  mainImage,
  Images[]{
    ...,
    asset->{
      url
    }
  }
}`);

export const FEATURED_PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)][0...3]{
  _id,
  projectname,
  slug,
  tagline,
  excerpt,
  mainImage
}`);

// Query Functions

export async function getAllProjects() {
  const projects = await client.fetch(ALL_PROJECTS_QUERY);
  return projects;
}

export async function getProjectBySlug(slug: string) {
  const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
  return project;
}

export async function getFeaturedProjects() {
  const featuredProjects = await client.fetch(FEATURED_PROJECTS_QUERY);
  return featuredProjects;
}
