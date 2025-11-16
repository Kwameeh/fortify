import BookingForm from "@/components/forms/BookingForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book LCD Screen & Stage Lighting Equipment | Ghana",
  description:
    "Book your LCD screen rental and stage lighting equipment in Ghana. Fill out our booking form for events in Accra and throughout Ghana. Professional equipment for weddings, corporate events, and productions.",
  keywords: [
    "book LCD screen rental Ghana",
    "stage lighting booking Accra",
    "rent equipment Ghana",
    "event equipment booking",
    "LCD screen hire Ghana",
    "lighting rental booking",
  ],
  openGraph: {
    title: "Book LCD Screen & Stage Lighting Equipment | Fortify Productions",
    description:
      "Book professional LCD screen rental and stage lighting equipment for your event in Ghana.",
    type: "website",
  },
};

export default function Booking() {
  return (
    <>
      <section className="w-full h-[500px] relative mb-16 overflow-hidden rounded-lg">
        <Image
          src="/images/light.jpeg"
          alt="Book LCD Screen & Stage Lighting with Fortify Productions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl font-bebas text-white">Book LCD Screen & Stage Lighting</h1>
        </div>
      </section>

      <main className="w-full py-12 px-6 md:px-12 lg:px-24">
        <BookingForm />

        {/* Why Choose Us Section */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bebas mb-4">
              Why Choose Fortify Productions?
            </h2>
            <p className="text-lg text-gray-600">
              We bring your vision to life with professional expertise and
              creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-xl font-bebas mb-2">Years Experience</h3>
              <p className="text-gray-600">
                Professional LCD screen rental and stage lighting services with
                years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h3 className="text-xl font-bebas mb-2">Events Completed</h3>
              <p className="text-gray-600">
                Successfully delivered memorable experiences for weddings,
                corporate events, and more
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-bebas mb-2">Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support to ensure your event runs
                smoothly
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bebas mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              From initial consultation to final delivery, we make it simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bebas mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your vision, requirements, and expectations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bebas mb-2">Planning</h3>
              <p className="text-gray-600">
                Detailed planning and preparation for your event
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bebas mb-2">Execution</h3>
              <p className="text-gray-600">
                Professional capture of your special moments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bebas mb-2">Delivery</h3>
              <p className="text-gray-600">
                High-quality final products delivered on time
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
