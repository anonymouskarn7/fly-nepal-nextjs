export default function FleetPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight1.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/70 via-black/10 to-[#07111f]/85"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sky-300 text-xs sm:text-sm mb-6">
            Advanced Aviation Fleet
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Next-Generation
            <span className="block text-sky-300 mt-2">
              Aerospace Fleet Systems
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Fly Nepal is building a future-ready aviation fleet
            powered by intelligent aerospace technologies,
            sustainable engineering, and high-performance
            operational systems.
          </p>

        </div>

        {/* Fleet Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {/* Card 1 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div className="h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight1.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Commercial Aviation
              </p>

              <h3 className="text-2xl font-bold">
                Smart Passenger Fleet
              </h3>

              <p className="mt-5 text-white/75 leading-relaxed">
                High-efficiency passenger aircraft engineered
                for intelligent aviation operations and
                sustainable global connectivity.
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div className="h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight2.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Cargo Systems
              </p>

              <h3 className="text-2xl font-bold">
                Intelligent Cargo Fleet
              </h3>

              <p className="mt-5 text-white/75 leading-relaxed">
                Advanced cargo aviation systems optimized
                for smart logistics, operational efficiency,
                and sustainable transportation solutions.
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div className="h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight3.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Future Mobility
              </p>

              <h3 className="text-2xl font-bold">
                Autonomous Flight Systems
              </h3>

              <p className="mt-5 text-white/75 leading-relaxed">
                Research-driven future mobility aircraft
                designed for autonomous aviation,
                intelligent navigation, and smart aerospace ecosystems.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-28 bg-white/[0.12] border border-white/20 backdrop-blur-md rounded-[40px] p-10 sm:p-16 text-center">

          <p className="uppercase tracking-[5px] text-sky-200 text-xs sm:text-sm mb-6">
            Aviation Excellence
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Engineering Smarter
            <span className="block text-sky-300 mt-2">
              Aviation Experiences
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Fly Nepal’s fleet ecosystem combines intelligent
            aerospace systems, sustainability-focused engineering,
            and advanced operational technologies to redefine
            the future of global aviation.
          </p>

          <button className="mt-10 bg-sky-300 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Fleet Systems
          </button>

        </div>

      </div>

    </main>
  );
}