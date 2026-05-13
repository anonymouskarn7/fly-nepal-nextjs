export default function NewsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/75 via-black/15 to-[#07111f]/85"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sky-300 text-xs sm:text-sm mb-6">
            Aviation Updates
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Latest Aerospace
            <span className="block text-sky-300 mt-2">
              News & Innovation
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Stay connected with Fly Nepal’s latest aviation developments,
            aerospace innovation projects, sustainability initiatives,
            and future-focused engineering breakthroughs.
          </p>

        </div>

        {/* News Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          {/* Card 1 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight1.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Aerospace Innovation
              </p>

              <h2 className="text-2xl font-bold leading-snug">
                Fly Nepal Launches
                Future Aviation Research Program
              </h2>

              <p className="mt-5 text-white/75 leading-relaxed">
                A new aerospace initiative focused on intelligent
                aviation systems, sustainable engineering,
                and next-generation flight technologies.
              </p>

              <button className="mt-8 text-sky-300 font-semibold hover:translate-x-1 transition duration-300">
                Read More →
              </button>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight2.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Sustainable Aviation
              </p>

              <h2 className="text-2xl font-bold leading-snug">
                Smart Green Aviation
                Infrastructure Expansion
              </h2>

              <p className="mt-5 text-white/75 leading-relaxed">
                Fly Nepal introduces eco-friendly aerospace
                systems designed for future-ready aviation
                operations and sustainability leadership.
              </p>

              <button className="mt-8 text-sky-300 font-semibold hover:translate-x-1 transition duration-300">
                Read More →
              </button>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] overflow-hidden hover:bg-white/[0.18] transition duration-300">

            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/flight3.jpg')",
              }}
            ></div>

            <div className="p-8">

              <p className="uppercase tracking-[4px] text-sky-200 text-xs mb-4">
                Aviation Technology
              </p>

              <h2 className="text-2xl font-bold leading-snug">
                AI-Powered Flight
                Systems Enter Development
              </h2>

              <p className="mt-5 text-white/75 leading-relaxed">
                Advanced aerospace analytics and intelligent
                operational systems are shaping the next
                evolution of aviation technology.
              </p>

              <button className="mt-8 text-sky-300 font-semibold hover:translate-x-1 transition duration-300">
                Read More →
              </button>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-28 bg-white/[0.12] border border-white/20 backdrop-blur-md rounded-[40px] p-10 sm:p-16 text-center">

          <p className="uppercase tracking-[5px] text-sky-200 text-xs sm:text-sm mb-6">
            Future Aviation Insights
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Discover The Next Era
            <span className="block text-sky-300 mt-2">
              Of Aerospace Innovation
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Explore the latest developments in intelligent aviation,
            aerospace engineering, smart infrastructure,
            and sustainable flight systems shaping the future.
          </p>

          <button className="mt-10 bg-sky-300 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore More News
          </button>

        </div>

      </div>

    </main>
  );
}