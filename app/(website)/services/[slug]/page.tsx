import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExpertiseBySlug } from "@/sanity/queries/expertise";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

type Props = {
  params: Promise<{ slug: string }>;
};

// Portable Text components configuration
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl mb-6 leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-black mb-6 border-l-4 border-opacity-60 bg-gray-100 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href || "#"}
          target={target}
          className="font-bold underline text-black">
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6">{children}</ul>
    ),
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expertise = await getExpertiseBySlug(slug);

  if (!expertise) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found",
    };
  }

  return {
    title: `${expertise.heading} | Our Services`,
    description:
      expertise.excerpt || expertise.tagline || "Our professional services",
    openGraph: {
      title: expertise.heading || "",
      description: expertise.excerpt || expertise.tagline || "",
      images: expertise.image ? [urlFor(expertise.image).url()] : [],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const expertise = await getExpertiseBySlug(slug);

  if (!expertise) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/services"
            className="text-black hover:underline mb-4 inline-block">
            ← Back to all services
          </Link>
          <h1 className="text-5xl font-bebas text-black mb-4">
            {expertise.heading}
          </h1>
          {expertise.tagline && (
            <p className="text-lg italic text-gray-700 mb-6">
              {expertise.tagline}
            </p>
          )}
        </div>

        {expertise.image && (
          <div className="mb-12 w-full aspect-video overflow-hidden rounded-lg">
            <Image
              src={urlFor(expertise.image).url()}
              alt={expertise.heading || "Service image"}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bebas mb-6 text-black">
              About this service
            </h2>
            {expertise.body ? (
              <div className="prose prose-lg max-w-none text-gray-800">
                <PortableText value={expertise.body} components={components} />
              </div>
            ) : (
              <p className="text-gray-800">{expertise.excerpt}</p>
            )}

            {expertise.link && (
              <div className="mt-8">
                <Link
                  href={expertise.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white font-bebas px-6 py-3 rounded-md hover:bg-gray-800 transition">
                  Learn more
                </Link>
              </div>
            )}
          </div>

          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bebas mb-4 text-black">
                Our expertise
              </h3>
              <p className="text-gray-800">{expertise.excerpt}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 className="text-2xl font-bebas text-black">
                Need a similar service?
              </h3>
              <p className="text-gray-700">
                We&apos;re here to help with your project
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-4 sm:mt-0 inline-block bg-black text-white font-bebas px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
