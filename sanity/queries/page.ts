import { groq } from "next-sanity";
import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

// GROQ query to fetch a page by its slug with all pageBuilder components
export const pageBySlugQuery = defineQuery(
  groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    // Basic content for all component types
    pageBuilder[]{
      _type,
      _key,
      _ref
    },
    // Expanded references for each component type
    "hero": pageBuilder[_type == "hero"][0]{
      ...*[_type == "hero" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "textWithIllustration": pageBuilder[_type == "textWithIllustration"][0]{
      ...*[_type == "textWithIllustration" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "gallery": pageBuilder[_type == "galleryReference"][0]{
      ...*[_type == "gallery" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "form": pageBuilder[_type == "form"][0]{
      ...*[_type == "form" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "video": pageBuilder[_type == "videoReference"][0]{
      ...*[_type == "video" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "promotion": pageBuilder[_type == "callToAction"][0]{
      ...*[_type == "promotion" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "sectionImageOverlay": pageBuilder[_type == "sectionImageOverlay"][0]{
      ...*[_type == "sectionImageOverlay" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    }
  }`
);

// Function to fetch a page by slug
export async function getPageBySlug(slug: string) {
  const pageBySlugQueryC = defineQuery(
    groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    // Basic content for all component types
    pageBuilder[]{
      _type,
      _key,
      _ref
    },
    // Expanded references for each component type
    "hero": pageBuilder[_type == "hero"][0]{
      ...*[_type == "hero" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "textWithIllustration": pageBuilder[_type == "textWithIllustration"][0]{
      ...*[_type == "textWithIllustration" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "gallery": pageBuilder[_type == "galleryReference"][0]{
      ...*[_type == "gallery" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "form": pageBuilder[_type == "form"][0]{
      ...*[_type == "form" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "video": pageBuilder[_type == "videoReference"][0]{
      ...*[_type == "video" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "promotion": pageBuilder[_type == "callToAction"][0]{
      ...*[_type == "promotion" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    },
    "sectionImageOverlay": pageBuilder[_type == "sectionImageOverlay"][0]{
      ...*[_type == "sectionImageOverlay" && _id == ^._ref][0]{
        _id,
        _type,
        _key,
        ...
      }
    }
  }`
  );
  if (!slug) {
    throw new Error("Slug is required to fetch a page");
  }

  const page = await client.fetch(pageBySlugQueryC, { slug });
  return page;
}

// GROQ query to fetch all pages (basic info only)
export const allPagesQuery = defineQuery(
  groq`*[_type == "page"]{
    _id,
    title,
    slug
  }`
);

export async function getAllPages() {
  return client.fetch(allPagesQuery);
}

// GROQ query to fetch all page paths for static generation
export const allPagePathsQuery = defineQuery(
  groq`*[_type == "page" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
);

export async function getAllPagePaths() {
  return client.fetch(allPagePathsQuery);
}
