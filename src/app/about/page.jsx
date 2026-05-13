export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight2.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/70 via-black/20 to-[#07111f]/80"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sky-300 text-xs sm:text-sm mb-6">
            About Fly Nepal
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Engineering The Future
            <span className="block text-sky-300 mt-2">
              Of Aviation Innovation
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Fly Nepal is building a visionary aerospace ecosystem focused on
            intelligent aviation infrastructure, sustainable engineering,
            advanced air mobility, and next-generation flight technologies.
          </p>

        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 mt-24 items-center">

          {/* Left */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 sm:p-10">

            <p className="uppercase tracking-[4px] text-sky-200 text-xs sm:text-sm mb-5">
              Our Mission
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Transforming Nepal Into
              <span className="block text-sky-300 mt-2">
                A Global Aviation Hub
              </span>
            </h2>

            <p className="mt-8 text-white/80 leading-relaxed text-base sm:text-lg">
              Our mission is to create a world-class aerospace environment
              where innovation, engineering excellence, and sustainability
              come together to shape the future of aviation in Nepal and beyond.
            </p>

            <p className="mt-6 text-white/75 leading-relaxed text-base sm:text-lg">
              By integrating advanced aviation systems, research-driven
              development, and intelligent infrastructure, Fly Nepal aims
              to inspire the next era of aerospace leadership across Asia.
            </p>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-sky-200">
                Innovation & Engineering
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                Fly Nepal combines intelligent aerospace systems,
                sustainable engineering, and advanced aviation
                technologies to build future-ready aviation solutions.
              </p>

            </div>

            <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-sky-200">
                Sustainable Aviation
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                We focus on environmentally responsible aviation systems,
                smart energy integration, and future mobility technologies
                designed for long-term global sustainability.
              </p>

            </div>

            <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-sky-200">
                Future-Ready Infrastructure
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                Our facilities are designed to support next-generation
                aerospace research, intelligent flight systems,
                and high-performance aviation operations.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}