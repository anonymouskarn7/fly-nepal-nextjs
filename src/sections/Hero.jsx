"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] sm:min-h-screen overflow-hidden flex items-center pt-32 pb-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight1.jpg')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/90 via-black/50 to-[#07111f]/80"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Main Content */}
      <div className="container-custom relative z-10">

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto lg:mx-0">

          {/* Subtitle */}
          <p className="uppercase tracking-[6px] text-sky-300 mb-6 text-xs sm:text-sm text-center">
            Nepal Aviation Innovation
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-center lg:text-left">

            <span className="block lg:ml-44">
              Engineering
            </span>

            <span className="block mt-2 sm:mt-0">
              The Future Of Flight
            </span>

          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed text-center">
            Fly Nepal is redefining aerospace innovation,
            sustainable aviation systems, and advanced air mobility
            through world-class engineering and aviation technology.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-center">

            <button className="bg-white text-black px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              Explore Facilities
            </button>

            <button className="border border-white/20 px-7 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              View Fleet
            </button>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white/[0.08] border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-sky-400/30 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-sky-300">
              25+
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed text-sm sm:text-base">
              Aviation Facilities
            </p>
          </div>

          <div className="bg-white/[0.08] border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-sky-400/30 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-sky-300">
              120+
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed text-sm sm:text-base">
              Aerospace Experts
            </p>
          </div>

          <div className="bg-white/[0.08] border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-sky-400/30 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-sky-300">
              15
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed text-sm sm:text-base">
              Innovation Labs
            </p>
          </div>

          <div className="bg-white/[0.08] border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 hover:border-sky-400/30 transition duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold text-sky-300">
              100%
            </h3>

            <p className="text-white/60 mt-3 leading-relaxed text-sm sm:text-base">
              Sustainable Vision
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}