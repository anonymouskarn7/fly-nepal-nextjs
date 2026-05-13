"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 text-white">

        {/* Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/10"></div>

        {/* Navbar Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 h-20 flex items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
          >

            <Image
              src="/images/logo.jpg"
              alt="Fly Nepal Logo"
              width={42}
              height={42}
              className="rounded-full object-cover"
            />

            <span className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[2px] whitespace-nowrap">
              FLY NEPAL
            </span>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 text-sm uppercase tracking-[2px] ml-auto pr-6">

            <Link href="/" className="hover:text-sky-300 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-sky-300 transition">
              About
            </Link>

            <Link href="/facilities" className="hover:text-sky-300 transition">
              Facilities
            </Link>

            <Link href="/fleet" className="hover:text-sky-300 transition">
              Fleet
            </Link>

            <Link href="/news" className="hover:text-sky-300 transition">
              News
            </Link>

            <Link href="/contact" className="hover:text-sky-300 transition">
              Contact
            </Link>

          </nav>

        </div>

      </header>

      {/* ================= MOBILE FLOAT BUTTON ================= */}
      <div className="lg:hidden fixed top-5 right-5 z-[999999]">

        <a
          href="#footer-navigation"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black text-3xl font-bold shadow-2xl ring-4 ring-white/20"
        >
          ☰
        </a>

      </div>
    </>
  );
}