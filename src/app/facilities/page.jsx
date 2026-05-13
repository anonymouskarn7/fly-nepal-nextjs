export default function FacilitiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center"
        style={{
          backgroundImage: "url('/images/flight3.jpg')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/70 via-black/10 to-[#07111f]/80"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sky-300 text-xs sm:text-sm mb-6">
            Aviation Infrastructure
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            World-Class
            <span className="block text-sky-300 mt-2">
              Aviation Facilities
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Fly Nepal is developing intelligent aviation facilities
            designed for aerospace innovation, sustainable engineering,
            and next-generation flight operations across the region.
          </p>

        </div>

        {/* Facility Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {/* Card 1 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              ✈
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Aerospace Research Labs
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              Advanced research facilities focused on intelligent
              aviation systems, aerospace innovation, and future
              mobility technologies.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              🛫
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Smart Flight Operations
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              Intelligent operational infrastructure integrating
              automation, real-time analytics, and sustainable
              aviation systems.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              🌎
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Sustainable Infrastructure
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              Eco-friendly aviation facilities engineered with
              modern sustainability standards and future-focused
              environmental systems.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              ⚙
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Engineering Centers
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              High-performance engineering environments supporting
              aerospace manufacturing, design systems, and innovation.
            </p>

          </div>

          {/* Card 5 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              🛰
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Aviation Technology Hub
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              Smart digital aviation systems integrated with
              intelligent monitoring, aerospace analytics,
              and AI-powered operations.
            </p>

          </div>

          {/* Card 6 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/[0.18] transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-white/[0.12] border border-white/20 flex items-center justify-center text-2xl">
              🚀
            </div>

            <h3 className="text-2xl font-bold mt-8 text-sky-200">
              Future Mobility Systems
            </h3>

            <p className="mt-5 text-white/75 leading-relaxed">
              Research and development initiatives exploring
              advanced air mobility, autonomous aviation,
              and next-generation flight ecosystems.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}