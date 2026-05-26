// Footer.jsx

import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    short: "GH",
    href: "#",
  },
  {
    name: "LinkedIn",
    short: "LI",
    href: "#",
  },
  {
    name: "Twitter",
    short: "TW",
    href: "#",
  },
];

const footerLinks = [
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1e1208] px-[6%] pt-24 pb-10 text-white">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[10%] w-[350px] h-[350px] rounded-full bg-[#5e3b1a]/30 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[10%] w-[350px] h-[350px] rounded-full bg-[#b8834a]/10 blur-[140px]" />

      {/* TOP */}
      <div className="relative z-10 grid lg:grid-cols-3 gap-16 pb-16 border-b border-white/10">
        {/* BRAND */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl font-black text-[#f5e6d3] mb-5">
            DJO<span className="text-[#b8834a]">.</span>
          </h2>

          <p className="text-[#d4a574] leading-8 max-w-[340px] font-light">
            Crafting modern, premium and high-performance
            digital experiences with clean frontend
            engineering and stunning user interfaces.
          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Navigation
          </h3>

          <div className="flex flex-col gap-4">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{
                  x: 8,
                }}
                href={`#${link.toLowerCase()}`}
                className="text-[#d4a574] hover:text-white transition duration-300 w-fit"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Connect
          </h3>

          <div className="flex gap-4 flex-wrap">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-[#d4a574] hover:bg-[#5e3b1a] hover:text-white hover:border-[#b8834a] transition-all duration-300 shadow-lg"
              >
                <span className="font-semibold text-sm tracking-wider">
                  {social.short}
                </span>
              </motion.a>
            ))}
          </div>

          <p className="text-[#9a6a35] text-sm mt-8 leading-7">
            Open for freelance projects, collaborations and
            frontend engineering opportunities.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 pt-8"
      >
        <p className="text-[#9a6a35] text-sm text-center md:text-left">
          © 2026 Dahunsi James Opeyemi. All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-sm text-[#b8834a]">
          <span>Built with</span>

          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-red-400"
          >
            ❤
          </motion.span>

          <span>using React & Framer Motion</span>
        </div>
      </motion.div>
    </footer>
  );
}