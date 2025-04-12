export const revalidate = 0;

import HomeScreen from "@/components/home/homeSection";
import { urlFor } from "@/sanity/lib/image";
import { getExpertisesWithLimit } from "@/sanity/queries/expertise";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const Expertises = await getExpertisesWithLimit(2);

  return (
    <main className="no-scrollbar w-screen">
      <HomeScreen />
      <section
        id="section"
        className=" overflow-hidden sm:py-24 py-6 relative w-full justify-center flex items-center">
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bebas">Our Expertise</h2>
          </div>
          <div className="w-full h-full gap-6 flex flex-col sm:flex-row justify-between items-center">
            {Expertises.map((expertise, index: number) => {
              return (
                <Link
                  key={index}
                  href={`/services/${expertise.slug?.current}`}
                  className="h-full w-full border-2 border-black p-6 group sm:w-1/2 flex items-center justify-center flex-col">
                  <span className="text-2xl relative z-10 text-black font-bebas ">
                    {expertise.heading}
                  </span>
                  <div className="h-full sm:h-[60vh] w-full overflow-hidden">
                    {expertise.image ? (
                      <Image
                        src={urlFor(expertise.image).url()}
                        alt=""
                        width={320}
                        height={320}
                        blurDataURL={urlFor(expertise.image).blur(10).url()}
                        className=" group-hover:scale-105 duration-300 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
