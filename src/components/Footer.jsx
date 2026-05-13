"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b14]">

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-cyan-400/10 blur-[140px] rounded-full"></div>

      {/* Main Footer */}
      <div className="container-custom relative z-10 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* ================= BRAND ================= */}
          <div>

            {/* Logo + Title */}
            <div className="flex items-center gap-3">

              <Image
                src="/images/logo.jpg"
                alt="Fly Nepal Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />

              <h2 className="text-3xl font-bold tracking-[2px]">
                Fly Nepal
              </h2>

            </div>

            {/* Description */}
            <p className="text-white/60 mt-6 leading-relaxed text-sm sm:text-base">
              Advancing Nepal’s aviation future through
              aerospace innovation, intelligent engineering,
              and sustainable flight technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div id="footer-navigation">

            <h3 className="text-xl font-semibold mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

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

            </div>

          </div>

          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <p className="hover:text-sky-300 transition cursor-pointer">
                Aerospace Engineering
              </p>

              <p className="hover:text-sky-300 transition cursor-pointer">
                Flight Innovation
              </p>

              <p className="hover:text-sky-300 transition cursor-pointer">
                Aviation Research
              </p>

              <p className="hover:text-sky-300 transition cursor-pointer">
                Smart Infrastructure
              </p>

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-white/60 text-sm sm:text-base">

              <p>
                Kathmandu, Nepal
              </p>

              <p>
                info@flynepal.com
              </p>

              <p>
                +977 9800000000
              </p>

              <p>
                Sun - Fri / 9AM - 6PM
              </p>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50 text-sm text-center md:text-left">
            © 2026 Fly Nepal. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/50">

            <p className="hover:text-sky-300 cursor-pointer transition">
              Privacy Policy
            </p>

            <p className="hover:text-sky-300 cursor-pointer transition">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}