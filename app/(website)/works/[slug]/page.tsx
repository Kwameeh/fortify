import { Metadata } from "next";
import { getProjectBySlug } from "@/sanity/queries/project";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.projectname || "Untitled Project"} | Our Works`,
    description: project.excerpt || "",
    openGraph: {
      title: `${project.projectname || "Untitled Project"} | Our Works`,
      description: project.excerpt || "",
      images: project.mainImage
        ? [
            {
              url: urlFor(project.mainImage).url(),
              width: 1200,
              height: 630,
              alt: project.projectname || "Project Image",
            },
          ]
        : [],
    },
  };
}

// Generate static paths at build time
// export async function generateStaticParams() {
//   const projects = await getAllProjects();

//   return projects.map((project) => ({
//     slug: project.slug?.current || "",
//   }));
// }

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 sm:px-24 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/works"
            className="text-white mb-8 inline-block hover:underline">
            ← Back to Works
          </Link>
          <h1 className="text-white text-6xl font-bebas">
            {project.projectname || "Untitled Project"}
          </h1>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.location && (
              <span className="text-white font-bold">{project.location}</span>
            )}
            {project.tagline && (
              <span className="border-2 border-white text-white italic rounded-full px-4 py-1">
                {project.tagline}
              </span>
            )}
          </div>
          {project.services && project.services.length > 0 && (
            <div className="mt-4">
              <span className="text-white text-sm">Services:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.services.map((service) => (
                  <span
                    key={service._id}
                    className="bg-white text-black px-3 py-1 text-sm rounded-full">
                    {service.name || "Unnamed Service"}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main image */}
        {project.mainImage && (
          <div className="w-full aspect-video mb-12 overflow-hidden">
            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.projectname || "Project Image"}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bebas mb-4">
              About the Project
            </h2>
            <div className="text-white prose prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: project.description || "",
                }}
              />
            </div>
          </div>
        )}

        {/* Project URL if available */}
        {project.url && (
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bebas mb-4">
              Project Link
            </h2>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 font-bebas hover:bg-gray-200 transition-colors">
              Visit Project
            </Link>
          </div>
        )}

        {/* Gallery */}
        {project.Images && project.Images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-white text-3xl font-bebas mb-6">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.Images.map((image, index) =>
                image.asset?.url ? (
                  <div key={index} className="aspect-video overflow-hidden">
                    <Image
                      src={image.asset.url}
                      alt={`${project.projectname || "Project"} image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-5xl text-white font-bebas leading-none max-w-96">
                Ready to start your project?
              </h2>
              <Link
                href="/contact"
                className="mt-6 inline-block px-6 font-bebas py-3 w-fit border-white border-2 text-xl hover:bg-white hover:text-black duration-300 text-white">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
