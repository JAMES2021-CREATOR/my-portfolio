import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#faf7f2]/80 border-b border-[#e8c9a0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
       <h1>
        <img className="w-13 md:w-15" src="images/logo.png" alt="" srcset="" />
       </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  active === link.path.replace("#", "")
                    ? "text-[#b8834a]"
                    : "text-[#5e3b1a] hover:text-[#b8834a]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#5e3b1a] text-white text-sm font-medium hover:bg-[#b8834a] transition-all duration-300"
          >
            Hire Me
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#5e3b1a] text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#faf7f2] border-t border-[#e8c9a0]"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-[#5e3b1a] text-sm uppercase tracking-wider font-medium hover:text-[#b8834a] transition-all"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-fit px-5 py-2.5 rounded-full bg-[#5e3b1a] text-white text-sm font-medium hover:bg-[#b8834a] transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}