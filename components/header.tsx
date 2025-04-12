"use client";
import headerData from "@/data/header.json";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-10 w-full transition-all duration-500  ${
        scrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}>
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 border-b border-white/20">
        <Link href="/" className="relative z-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <motion.ul className="flex items-center justify-center gap-8">
            {headerData.header.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-white text-base uppercase tracking-wider">
                <Link
                  href={item.href}
                  className="hover:text-gray-300 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-white/40">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={showMenu ? { opacity: 1 } : { opacity: 0 }}
          className={`md:hidden fixed inset-0 bg-black/95 z-10 ${
            showMenu ? "pointer-events-auto" : "pointer-events-none"
          }`}>
          <div className="h-full flex flex-col items-center justify-center">
            <motion.ul className="flex flex-col items-center justify-center gap-8">
              {headerData.header.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-white text-xl uppercase tracking-wider">
                  <Link
                    href={item.href}
                    onClick={() => setShowMenu(false)}
                    className="hover:text-gray-300 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-white/40">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li className="mt-6">
                <Link href="/contact" onClick={() => setShowMenu(false)}>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#000",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="font-bebas border border-white/70 rounded-full px-6 py-2 text-white text-base tracking-wider transition-all duration-300">
                    Contact Us
                  </motion.button>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="text-white md:hidden z-20 relative border border-white/30 rounded-full px-3 py-1 text-sm hover:bg-white/10 transition-all duration-300">
            {showMenu ? "Close" : "Menu"}
          </motion.button>

          <Link href="/contact" className="hidden md:block">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,1)",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-bebas border border-white/70 rounded-full px-5 py-1.5 text-white text-sm tracking-wider transition-all duration-300">
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderComponent;
