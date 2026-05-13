"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight2.jpg')",
        }}
      >

        {/* LIGHTER Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Softer Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/50 via-black/15 to-[#07111f]/60"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <Container>

        <div className="relative z-10">

          <SectionTitle
            subtitle="Who We Are"
            title="A New Era Of Aviation"
          />

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">

              <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                Fly Nepal is a next-generation aerospace and aviation
                organization focused on engineering excellence,
                sustainability, innovation, and advanced air mobility
                technologies for the future of global transportation.
              </p>

              <p className="text-white/80 leading-relaxed text-base sm:text-lg mt-8">
                Our facilities combine cutting-edge aerospace systems,
                intelligent operations, and world-class engineering
                capabilities inspired by global aviation leaders.
              </p>

              <button className="mt-10 bg-sky-300 text-black px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
                Learn More
              </button>

            </div>

            {/* Right Glass Card */}
            <div className="bg-white/[0.18] border border-white/25 backdrop-blur-md rounded-[32px] p-6 sm:p-10 overflow-hidden shadow-2xl">

              <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                Our Vision
              </h3>

              <p className="text-white/85 leading-relaxed text-base sm:text-lg">
                To establish Nepal as a future-forward aviation and
                aerospace innovation hub by integrating intelligent
                engineering, sustainable systems, and modern aviation
                technologies into a world-class operational ecosystem.
              </p>

              {/* Responsive Cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="bg-white/[0.14] rounded-2xl p-5 sm:p-6 border border-white/20 min-w-0 backdrop-blur-sm">

                  <h4 className="text-2xl sm:text-3xl font-bold text-sky-200 break-words">
                    2035
                  </h4>

                  <p className="text-white/80 mt-2 text-sm sm:text-base leading-relaxed">
                    Future Vision
                  </p>

                </div>

                {/* Card 2 */}
                <div className="bg-white/[0.14] rounded-2xl p-5 sm:p-6 border border-white/20 min-w-0 backdrop-blur-sm">

                  <h4 className="text-2xl sm:text-3xl font-bold text-sky-200 break-words">
                    Global
                  </h4>

                  <p className="text-white/80 mt-2 text-sm sm:text-base leading-relaxed break-words">
                    Aviation Reach
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}