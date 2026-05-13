"use client";

import { facilities } from "@/data/facilities";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Facilities() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight3.jpg')",
        }}
      >

        {/* LIGHTER Overlay */}
        <div className="absolute inset-0 bg-black/38"></div>

        {/* Softer Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/45 via-black/10 to-[#07111f]/55"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <Container>

        <div className="relative z-10">

          <SectionTitle
            subtitle="Infrastructure"
            title="World-Class Facilities"
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {facilities.map((item) => (
              <div
                key={item.id}
                className="bg-white/[0.18] border border-white/25 rounded-[30px] p-6 sm:p-8 backdrop-blur-md hover:bg-white/[0.22] hover:border-sky-200/60 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.12] flex items-center justify-center text-2xl mb-8 border border-white/20 backdrop-blur-sm">
                  ✈
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}