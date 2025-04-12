export const revalidate = 0;

import { GALLERY_BY_SLUG_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getGalleryBySlug } from "@/sanity/queries/gallery";

import Image from "next/image";
import Link from "next/link";

const GalleryPage = async () => {
  const galleryData: GALLERY_BY_SLUG_QUERYResult =
    await getGalleryBySlug("home");

  return (
    <section
      id="section"
      className="py-24 overflow-hidden sm:py-24 relative w-full justify-center flex items-center bg-black">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <h1 className="text-white text-6xl font-bebas">Gallery</h1>
        <span className="text-white text-base font-bold italic">
          Our Entire works are showcased here.
        </span>
        <h1 className="text-white text-4xl font-bebas">{galleryData?.title}</h1>
        <div className="grid-cols-1 grid-flow-row-dense gap-6 sm:grid-cols-2 md:grid-cols-4 grid">
          {galleryData?.images?.map((image) => {
            return (
              <div key={image._key}>
                <Link href="/">
                  <Image
                    src={urlFor(image).url()}
                    alt={image.alt || ""}
                    width={420}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
