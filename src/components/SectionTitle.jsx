"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTitle({ title, subtitle }) {

  const sectionRef = useRef(null);

  useEffect(() => {

    const el = sectionRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

  }, []);

  return (
    <div
      ref={sectionRef}
      className="mb-16 text-center"
    >
      <p className="uppercase tracking-[5px] text-sky-300 text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-6xl font-bold">
        {title}
      </h2>
    </div>
  );
}