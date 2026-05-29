// Projects.jsx

import { motion } from "framer-motion";

const projects = [
  {
    title: "DAHUNSI_STORE",
    type: "Featured Project",
    label: "E-Commerce",
    desc: "A fully responsive online store with cart management, Stripe payments, product filtering, and admin dashboard functionality.",
    techs: ["Next.js", "TypeScript", "Tailwind", "Stripe API", "Prisma"],
    gradient: "from-[#d4a574] to-[#b8834a]",
    featured: true,
    live: "https://e-commerce-phi-two-42.vercel.app/",
    github: "https://github.com/your-repo",
    image: "/projects/store.png",
  },
  {
    title: "Empire-strategist",
    type: "Web App",
    label: "Empire-strategist",
    desc: "A productivity dashboard with drag-and-drop task management and real-time collaboration.",
    techs: ["React", "Redux", "Socket.io"],
    gradient: "from-[#7d5228] to-[#5e3b1a]",
    live: "https://empire-strategist-tester.vercel.app/",
    github: "#",
    image: "/projects/taskflow.png",
  },
  {
    title: "Alma Mater college",
    type: "Website",
    label: "school website",
    desc: "A premium agency website with smooth animations, parallax scrolling and CMS integration.",
    techs: ["Next.js", "Framer Motion", "Sanity CMS"],
    gradient: "from-[#e8c9a0] to-[#d4a574]",
    live: "https://alma-mater-lilac.vercel.app/",
    github: "#",
    image: "/projects/agency.png",
  },
  {
    title: "Gym center",
    type: "Mobile-First",
    label: "Gym house",
    desc: "A finance tracker with charts, budgeting system and responsive mobile-first experience.",
    techs: ["React", "Chart.js", "Firebase", "SCSS", "PWA"],
    gradient: "from-[#5e3b1a] to-[#3e2610]",
    featured: true,
    live: "https://gym-center-zae6.vercel.app/",
    github: "",
    image: "/projects/walletwise.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#faf7f2] px-[6%] py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[450px] h-[450px] bg-[#d4a574]/20 blur-[140px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 relative z-10"
      >
        <div className="max-w-[600px]">
          <p className="uppercase tracking-[0.25em] text-sm text-[#9a6a35] mb-4">
            Portfolio
          </p>

          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-black leading-tight text-[#1e1208] mb-5">
            Selected <span className="italic text-[#9a6a35]">Work</span>
          </h2>
        </div>

        <p className="text-[#5e3b1a] text-lg leading-8 max-w-[500px] font-light">
          A showcase of projects that demonstrate my creativity, frontend
          engineering skills and ability to craft premium digital experiences.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 gap-7 relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -12,
            }}
            className={`group overflow-hidden rounded-[30px] border border-[#e8c9a0] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            {/* THUMBNAIL */}
            <div
              className={`relative h-[260px] bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

              {/* Floating Blur */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute w-[250px] h-[250px] rounded-full bg-white/10 blur-3xl"
              />

              {/* Label */}
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="relative z-10 font-serif text-5xl font-black text-white/30 tracking-tight"
              >
                {project.label}
              </motion.h3>

              {/* Badge */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 text-[#5e3b1a] text-xs uppercase tracking-wider font-semibold">
                {project.type}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-[#1e1208] mb-4 group-hover:text-[#9a6a35] transition duration-300">
                {project.title}
              </h3>

              <p className="text-[#5e3b1a] leading-7 font-light mb-6">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.techs.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="px-4 py-2 rounded-full bg-[#f5e6d3] border border-[#e8c9a0] text-[#7d5228] text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="px-5 py-3 rounded-full bg-[#5e3b1a] text-white text-sm font-medium"
                >
                  ↗ Live Demo
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="px-5 py-3 rounded-full border border-[#d4a574] text-[#5e3b1a] text-sm font-medium hover:bg-[#f5e6d3] transition duration-300"
                >
                  ⌥ GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
