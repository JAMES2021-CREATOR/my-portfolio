export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center"
    >
      {/* IMAGE SIDE */}
      <div className="relative flex justify-center animate-[fadeInUp_1s_ease] ">
        <div className="w-full max-w-md aspect-[4/5] bg-[#f5e6d3] border-2 border-[#e8c9a0] rounded-3xl flex items-center justify-center relative shadow-lg hover:scale-105 transition duration-300">
          <span className="text-6xl font-bold text-[#d4a574]">DJO</span>

          {/* EXPERIENCE BADGE */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#7d5228] text-white px-6 py-3 rounded-xl text-center shadow-md">
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-xs uppercase tracking-wider opacity-80">
              Years Experience
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div className="space-y-6 animate-[fadeInUp_1.2s_ease]">
        <p className="text-[#b8834a] uppercase tracking-[0.2em] text-sm font-medium">
          About Me
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#1e1208]">
          Building the Web, <br />
          <span className="italic text-[#b8834a]">One Pixel at a Time</span>
        </h2>

        <p className="text-[#5e3b1a] text-lg leading-relaxed">
          I'm a frontend developer based in Nigeria with a passion for creating
          clean, user-focused web experiences. I specialize in turning complex
          ideas into simple, beautiful, and high-performance interfaces.
        </p>

        <p className="text-[#5e3b1a] text-lg leading-relaxed">
          Whether it's a landing page, SaaS dashboard, or full web application —
          I bring both technical precision and creative design thinking to every
          project.
        </p>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 bg-[#faf7f2] border border-[#f5e6d3] rounded-xl hover:-translate-y-1 transition">
            <div className="text-2xl">🎨</div>
            <h4 className="font-semibold text-[#7d5228]">UI/UX Design</h4>
            <p className="text-sm text-[#9a6a35]">
              Clean, user-focused interfaces
            </p>
          </div>

          <div className="p-4 bg-[#faf7f2] border border-[#f5e6d3] rounded-xl hover:-translate-y-1 transition">
            <div className="text-2xl">⚡</div>
            <h4 className="font-semibold text-[#7d5228]">Performance</h4>
            <p className="text-sm text-[#9a6a35]">
              Fast, optimized web apps
            </p>
          </div>

          <div className="p-4 bg-[#faf7f2] border border-[#f5e6d3] rounded-xl hover:-translate-y-1 transition">
            <div className="text-2xl">📱</div>
            <h4 className="font-semibold text-[#7d5228]">Responsive</h4>
            <p className="text-sm text-[#9a6a35]">
              Works on all devices
            </p>
          </div>

          <div className="p-4 bg-[#faf7f2] border border-[#f5e6d3] rounded-xl hover:-translate-y-1 transition">
            <div className="text-2xl">🔧</div>
            <h4 className="font-semibold text-[#7d5228]">Clean Code</h4>
            <p className="text-sm text-[#9a6a35]">
              Scalable & maintainable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}