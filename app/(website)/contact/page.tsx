import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="w-full h-[500px] relative mb-16 overflow-hidden rounded-lg">
        <Image
          src="/images/coffees.jpg"
          alt="Contact Fortify Productions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl font-bebas text-white">Get In Touch</h1>
        </div>
      </section>
      <main className="w-full py-12 px-6 md:px-12 lg:px-24">
        {/* Banner Image */}

        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bebas mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Have a question or want to work with us? Reach out to Fortify
              Productions - your one-stop shop for all your production needs.
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bebas mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-black mt-1">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-200">
                    Madina Market Road
                    <br />
                    Behind J&apos;Famco Abattoir
                    <br />
                    Madina, Accra, Ghana
                    <br />
                    <span className="text-gray-400">Digital Address:</span>{" "}
                    GM-024-2843
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-black mt-1">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-200">
                    <a
                      href="mailto:fortifyproductions.gh@gmail.com"
                      className="hover:underline">
                      fortifyproductions.gh@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-black mt-1">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-200">
                    <a href="tel:+233249458249" className="hover:underline">
                      0249458249
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Instagram">
                    <FaInstagram size={20} />
                  </Link>
                  <Link
                    href="https://wa.me/0249458249"
                    target="_blank"
                    className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="WhatsApp">
                    <FaWhatsapp size={20} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/"
                    target="_blank"
                    className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="TikTok">
                    <FaTiktok size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-black p-8 rounded-lg">
            <h2 className="text-3xl font-bebas mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell us more about your project..."
                  required></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-300 w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="border-2 border-black p-4 h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6539005221224!2d-0.1710894!3d5.6727754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bbdee369f9f%3A0x5e5c6903c4d9e953!2sMadina%20Market%2C%20Accra!5e0!3m2!1sen!2sgh!4v1652359827654!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fortify Productions Location"></iframe>
          </div>
        </section>

        {/* Business Hours */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bebas mb-4">Business Hours</h2>
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-2 border-b border-gray-200 py-4">
                <span className="font-medium">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b border-gray-200 py-4">
                <span className="font-medium">Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="grid grid-cols-2 gap-2 py-4">
                <span className="font-medium">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
