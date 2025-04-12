import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

const isDevelopment = process.env.NODE_ENV === "development";
const developerToken = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId: projectId!,
  dataset: dataset!,
  apiVersion: apiVersion!,
  useCdn: isDevelopment ? false : true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: developerToken!, // Set to false if statically generating pages, using ISR or tag-based revalidation
  timeout: 4000,
});

export const clientFetch = <const QueryString extends string>({
  query,
  params = {},
  tags = [],
}: // revalidate = 0,
{
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
  // revalidate?: number | false;
}) => {
  return client.fetch(query, params, {
    next: {
      tags,
    },
  });
};
