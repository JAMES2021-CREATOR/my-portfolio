// Skills.jsx

import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: "🖥️",
    title: "Frontend Core",
    count: "4 technologies",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
  },
  {
    icon: "⚛️",
    title: "Frameworks & Libraries",
    count: "5 technologies",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Redux",
      "React Query",
    ],
  },
  {
    icon: "🎨",
    title: "Styling & Design",
    count: "5 tools",
    skills: [
      "Tailwind CSS",
      "SCSS/SASS",
      "Styled Components",
      "Figma",
      "Framer Motion",
    ],
  },
  {
    icon: "🔧",
    title: "Tools & Workflow",
    count: "6 tools",
    skills: [
      "Git & GitHub",
      "Vite",
      "Webpack",
      "Jest",
      "Vercel",
      "Netlify",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#1e1208] text-white px-[6%] py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#5e3b1a] opacity-20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#b8834a] opacity-10 blur-[140px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-[650px] mb-20 relative z-10"
      >
        <p className="uppercase tracking-[0.25em] text-sm text-[#d4a574] mb-4">
          Skills & Tools
        </p>

        <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-tight font-black text-[#f5e6d3] mb-6">
          My Technical{" "}
          <span className="italic text-[#b8834a]">
            Toolkit
          </span>
        </h2>

        <p className="text-[#e8c9a0] leading-8 text-lg font-light">
          A curated set of technologies I use to build
          modern, scalable and visually engaging web
          experiences.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 relative z-10"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl transition-all duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#b8834a]/20 via-transparent to-[#5e3b1a]/20" />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[#b8834a]/40 transition-all duration-500" />

            {/* HEADER */}
            <div className="relative z-10 flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7d5228] to-[#5e3b1a] flex items-center justify-center text-2xl shadow-lg"
              >
                {category.icon}
              </motion.div>

              <div>
                <h3 className="font-semibold text-[#f5e6d3] text-lg">
                  {category.title}
                </h3>

                <p className="text-xs text-[#b8834a] mt-1 tracking-wide">
                  {category.count}
                </p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="relative z-10 flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: idx * 0.08,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-[#e8c9a0] hover:bg-[#5e3b1a] hover:text-white hover:border-[#b8834a] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Floating Light */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-[#b8834a]/10 blur-3xl rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}