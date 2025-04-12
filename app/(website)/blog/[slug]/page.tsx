export const revalidate = 0;

import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Script from "next/script";

import { client } from "@/sanity/lib/client";
import { getPostBySlug } from "@/sanity/queries/posts";
import { PortableTextComponents, PortableTextBlock } from "@portabletext/react";
import { default as imageUrlBuilder } from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import Image from "next/image";
import Link from "next/link";

// Define types for Sanity data
interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

interface SanityImage {
  _type: "image";
  asset?: SanityImageAsset;
  alt?: string;
}

interface CategorySlug {
  current: string;
}

interface Category {
  _id: string;
  title: string | null;
  slug: CategorySlug | null;
}

interface Author {
  name: string | null;
  image?: SanityImage;
}

interface SanityPost {
  _id: string;
  title: string | null;
  mainImage: SanityImage | null;
  body: PortableTextBlock[] | null;
  publishedAt: string | null;
  categories: Category[] | null;
  author?: Author;
  description?: string | null;
}

type Props = {
  params: { slug: string };
};

// Generate metadata for the blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPostBySlug(slug)) as SanityPost;

  // Fallback values if post data is missing
  const title = post?.title || "Blog Post";
  const description = post?.description || "Read our latest blog post";

  // Construct image URL if available
  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post?.publishedAt || undefined,
      authors: post?.author?.name ? [post.author.name] : [],
      images: imageUrl ? [imageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
const componentsTest: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl mb-6 leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageValue = value as SanityImage;
      return (
        <div className="sm:h-[45vh] aspect-auto w-full h-[33vh] mb-6">
          <Image
            src={urlFor(imageValue).url()}
            alt={imageValue.alt || " "}
            width={800}
            height={500}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      );
    },
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-400 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold underline text-yellow-300">
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const data = (await getPostBySlug(slug)) as SanityPost;

  // Create JSON-LD for the blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data?.title || "",
    image: data?.mainImage
      ? [urlFor(data.mainImage).width(1200).height(630).url()]
      : [],
    datePublished: data?.publishedAt || "",
    author: data?.author
      ? {
          "@type": "Person",
          name: data.author.name || "",
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Fortify",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
  };

  return (
    <>
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        id="section"
        className="py-24 sm:py-24 relative w-full justify-center flex items-center bg-black">
        <div
          id="container"
          className=" px-6 sm:px-24 w-full h-full flex flex-col items-center">
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row text-white border-b-white border-b-2 pb-5 justify-between items-start sm:items-center">
              <div>
                <p>{data?.author?.name}</p>
                <p>{data?.publishedAt}</p>
              </div>
              <div className="flex flex-wrap">
                {data?.categories?.map((category, index) => {
                  return (
                    <p
                      className="border-2 border-white rounded-full px-6 py-2"
                      key={index}>
                      {category.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="py-6">
              <h1 className="text-6xl text-white font-bebas leading-none">
                {data?.title}
              </h1>
            </div>
            <div className="aspect-auto h-[45vh] sm:h-auto w-full">
              {data?.mainImage && (
                <Image
                  src={urlFor(data.mainImage).url()}
                  alt={data?.title || ""}
                  width={1200}
                  height={630}
                  priority={true}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              )}
            </div>
          </div>

          <div className="text-white w-full sm:w-[60vw] flex justify-center items-start flex-col">
            {data?.body && (
              <PortableText value={data.body} components={componentsTest} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
