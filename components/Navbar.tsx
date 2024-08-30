'use client'
import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for the animated hamburger lines
  const VARIANTS = {
    top: {
      open: { rotate: 45, y: 7 },
      closed: { rotate: 0, y: 0 },
    },
    middle: {
      open: { opacity: 0 },
      closed: { opacity: 1 },
    },
    bottom: {
      open: { rotate: -45, y: -7 },
      closed: { rotate: 0, y: 0 },
    },
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Animated Hamburger Button */}
      <MotionConfig
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.button
          className="lg:hidden z-50"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onClick={toggleMenu}
        >
          <motion.span
            variants={VARIANTS.top}
            className="block h-1 w-8 bg-black"
          />
          <motion.span
            variants={VARIANTS.middle}
            className="block h-1 w-8 bg-black my-1"
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="block h-1 w-8 bg-black"
          />
        </motion.button>
      </MotionConfig>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-40 lg:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-2xl text-gray-900 my-4 cursor-pointer transition-all hover:font-bold"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
