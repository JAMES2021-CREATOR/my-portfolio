import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 py-24 bg-[#faf7f2] overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="space-y-6 animate-fadeInUp">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5e6d3] border border-[#e8c9a0] text-sm text-[#7d5228] font-medium relative overflow-hidden animate-shine">
          Available for Freelance Work
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1e1208]">
          Crafting <span className="italic text-[#b8834a]">Digital</span>
          <br />
          Experiences That Matter
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[#5e3b1a] text-lg max-w-xl leading-relaxed">
          Hi, I'm Dahunsi James Opeyemi — a passionate frontend developer who
          transforms ideas into beautiful, high-performance web experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#7d5228] text-white hover:bg-[#b8834a] transition-all duration-300 hover:-translate-y-1 shadow-md"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[#d4a574] text-[#7d5228] hover:bg-[#f5e6d3] transition-all duration-300 hover:-translate-y-1"
          >
            Let's Talk
          </a>
        </div>

        {/* STATS */}
        <div className="flex gap-10 pt-6 border-t border-[#e8c9a0] animate-fadeIn">
          <div className="hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-[#7d5228]">3+</h3>
            <p className="text-sm text-[#9a6a35] uppercase">Years Exp</p>
          </div>

          <div className="hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-[#7d5228]">20+</h3>
            <p className="text-sm text-[#9a6a35] uppercase">Projects</p>
          </div>

          <div className="hover:-translate-y-1 transition">
            <h3 className="text-2xl font-bold text-[#7d5228]">15+</h3>
            <p className="text-sm text-[#9a6a35] uppercase">Clients</p>
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="relative flex justify-center mt-12 md:mt-0 animate-slideInRight">
        {/* MAIN AVATAR */}
        <div className="w-[320px] h-[420px] rounded-[120px_120px_80px_80px] bg-[#f5e6d3] border-2 border-[#e8c9a0] flex items-center justify-center relative shadow-xl overflow-hidden">
          {/* Image */}
          <img
            src="images/image1.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Name tag */}
          <div className="absolute bottom-6 px-4 py-1 rounded-full bg-white border text-sm text-[#7d5228]">
            Dahunsi James .O
          </div>
        </div>

        {/* FLOATING CARD 1 */}
        <div className="absolute top-16 -left-6 bg-white px-4 py-3 rounded-xl shadow-md border animate-float">
          <p className="text-xs text-[#9a6a35] uppercase">Current Stack</p>
          <p className="font-semibold text-[#7d5228]">React + Next.js</p>
          <p className="text-xs text-[#9a6a35]">Tailwind / TS</p>
        </div>

        {/* FLOATING CARD 2 */}
        <div className="absolute bottom-20 -right-6 bg-white px-4 py-3 rounded-xl shadow-md border animate-floatSlow">
          <p className="text-xs text-[#9a6a35] uppercase">Status</p>
          <p className="font-semibold text-green-600">🟢 Available</p>
          <p className="text-xs text-[#9a6a35]">Remote / On-site</p>
        </div>
      </div>

      {/* ANIMATIONS (TAILWIND EXTENSIONS) */}
      <style>
        {`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes shine {
          0% { background-position: -200px; }
          100% { background-position: 200px; }
        }

        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        .animate-slideInRight { animation: slideInRight 1s ease forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-floatSlow { animation: float 6s ease-in-out infinite; }
        .animate-shine {
          background: linear-gradient(120deg, #f5e6d3 30%, #fff 50%, #f5e6d3 70%);
          background-size: 200%;
          animation: shine 3s linear infinite;
        }
        `}
      </style>
    </section>
  );
}
