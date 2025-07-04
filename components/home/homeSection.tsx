import { urlFor } from "@/sanity/lib/image";
import { getPageBySlug } from "@/sanity/queries/page";
import { Page } from "@/sanity/queries/types.custom";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default async function HomeScreen() {
  const homepage: Page = await getPageBySlug("home");

  const Hero = homepage?.hero;
  const Content = homepage?.textWithIllustration;
  const SectionImageOverlay = homepage?.sectionImageOverlay;
  const Gallery = homepage?.gallery;

  return (
    <div>
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center">
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src={urlFor(Hero.image!).url()}
            alt="Hero Background cover"
            className="w-full h-full object-cover absolute"
            fill
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <Link href="/works">
              <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
                OUR WORKS
              </button>
            </Link>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none font-bebas text-white">
                {Hero.heading}
              </h2>
              <p className="text-white text-lg">{Hero.tagline} </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center">
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
            <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
              <p className="uppercase text-xl">{Content.heading}</p>
              <p>{Content.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
              <p className="text-base">{Content.excerpt}</p>
              <Link href="/services">
                <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden h-fit relative w-full justify-center flex items-center">
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="w-full h-fit">
            <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
              {SectionImageOverlay.heading}
            </h3>
            <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
              <Image
                src={urlFor(SectionImageOverlay.image).url()}
                alt=""
                width={320}
                height={320}
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center">
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
              See Our Works
            </button>
          </div>
          <div className="w-full h-full items-center justify-center">
            <Marquee className="w-full h-full" autoFill speed={15}>
              <div className="flex">
                {Gallery.images.map((image, index: number) => {
                  return (
                    <div key={index} className="sm:w-[33vw] h-full">
                      <Image
                        src={urlFor(image).url()}
                        alt=""
                        width={320}
                        height={320}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
