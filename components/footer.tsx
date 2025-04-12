import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/logo.png"
                alt="Fortify Productions Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-base font-semibold mb-2">
              Fortify Productions your one stop shop for all your production
            </h3>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-gray-800 pb-2 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-gray-200 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold border-b border-gray-800 pb-2 mb-4">
              Contact Us
            </h4>
            <div className="space-y-2">
              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  Address
                </span>
                <p className="text-gray-200">
                  Madina Market Road
                  <br />
                  Behind JFamco Abattoir
                  <br />
                  Madina, Accra, Ghana
                  <br />
                  <span className="text-gray-400">Digital Address:</span>{" "}
                  GM-024-2843
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  Email
                </span>
                <p className="text-gray-200">fortifyproductions.gh@gmail.com</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  Phone
                </span>
                <p className="text-gray-200">0249458249</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold border-b border-gray-800 pb-2 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Instagram">
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://wa.me/0249458249"
                target="_blank"
                className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com/"
                target="_blank"
                className="bg-transparent text-white border border-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                aria-label="TikTok">
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Fortify Productions</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
