export const revalidate = 0;

import HomeScreen from "@/components/home/homeSection";
import { urlFor } from "@/sanity/lib/image";
import { getOrderedExpertises } from "@/sanity/queries/expertise";
import { Expertises } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "LCD Screen Rental & Stage Lighting Services in Ghana | Fortify Productions",
  description:
    "Fortify Productions offers professional LCD screen rental and stage lighting services in Ghana. Located in Accra, we provide premium audio-visual equipment for weddings, corporate events, conferences, and productions. Contact us today for your event needs!",
  keywords: [
    "LCD screen rental Ghana",
    "stage lighting Ghana",
    "event equipment rental Accra",
    "LED screen hire Ghana",
    "audio visual services Accra",
    "event lighting Ghana",
    "production equipment rental Ghana",
    "corporate event equipment Accra",
    "wedding lighting services Ghana",
    "Madina event services",
  ],
  openGraph: {
    title:
      "LCD Screen Rental & Stage Lighting Services in Ghana | Fortify Productions",
    description:
      "Professional LCD screen rental and stage lighting services in Accra, Ghana. Premium equipment for all your event needs.",
    type: "website",
    locale: "en_GH",
    url: "https://fortifyproductions.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LCD Screen Rental & Stage Lighting Services in Ghana",
    description:
      "Professional LCD screen rental and stage lighting services in Accra, Ghana.",
  },
};

export default async function Home() {
  const Expertises: Expertises[] = await getOrderedExpertises();

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

      {/* Booking CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="px-6 sm:px-24 w-full h-full">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bebas mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Let's bring your vision to life with professional LCD screen
              rental and stage lighting services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-white text-black px-8 py-4 font-bebas text-xl hover:bg-gray-200 transition-colors duration-300 border-2 border-white">
                Book LCD Screen & Stage Lighting
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white px-8 py-4 font-bebas text-xl hover:bg-white hover:text-black transition-colors duration-300 border-2 border-white">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
