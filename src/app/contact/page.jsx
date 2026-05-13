export default function ContactPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/70 via-black/10 to-[#07111f]/80"></div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-sky-300 text-xs sm:text-sm mb-6">
            Contact Fly Nepal
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Let’s Shape The Future
            <span className="block text-sky-300 mt-2">
              Of Aviation Together
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/75 text-base sm:text-lg leading-relaxed">
            Connect with Fly Nepal for aviation innovation,
            aerospace collaboration, research opportunities,
            and future-ready engineering partnerships.
          </p>

        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mt-24 items-start">

          {/* Left Side */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 sm:p-10">

            <p className="uppercase tracking-[4px] text-sky-200 text-xs sm:text-sm mb-5">
              Contact Information
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Reach Out To
              <span className="block text-sky-300 mt-2">
                Our Aviation Team
              </span>
            </h2>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-sky-200">
                  Headquarters
                </h3>

                <p className="mt-2 text-white/75 leading-relaxed">
                  Kathmandu, Nepal
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sky-200">
                  Email Address
                </h3>

                <p className="mt-2 text-white/75 leading-relaxed">
                  info@flynepal.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sky-200">
                  Phone Number
                </h3>

                <p className="mt-2 text-white/75 leading-relaxed">
                  +977 9800000000
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-sky-200">
                  Working Hours
                </h3>

                <p className="mt-2 text-white/75 leading-relaxed">
                  Sunday — Friday / 9AM — 6PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/[0.14] border border-white/20 backdrop-blur-md rounded-[32px] p-8 sm:p-10">

            <p className="uppercase tracking-[4px] text-sky-200 text-xs sm:text-sm mb-5">
              Send Message
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Start A Conversation
            </h2>

            <form className="mt-10 space-y-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/[0.08] border border-white/15 rounded-2xl px-6 py-4 outline-none focus:border-sky-300 text-white placeholder:text-white/40"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/[0.08] border border-white/15 rounded-2xl px-6 py-4 outline-none focus:border-sky-300 text-white placeholder:text-white/40"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/[0.08] border border-white/15 rounded-2xl px-6 py-4 outline-none focus:border-sky-300 text-white placeholder:text-white/40"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-white/[0.08] border border-white/15 rounded-2xl px-6 py-4 outline-none focus:border-sky-300 text-white placeholder:text-white/40 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-sky-300 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}