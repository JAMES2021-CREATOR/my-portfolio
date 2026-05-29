// Contact.jsx

import { motion } from "framer-motion";

const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "dahunsijames2021@gmail.com",
    href: "mailto:dahunsijames2021@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+234 8051 388 846",
    href: "tel:+2348051388846",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "www.linkedin.com/dahunsi-james",
    href: "https://www.linkedin.com/in/dahunsi-james-127472187",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/dahunsi-james",
    href: "https://github.com/JAMES2021-CREATOR",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-[6%] "
    >
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#d4a574]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-[-180px] right-[-100px] w-[450px] h-[450px] bg-[#5e3b1a]/10 blur-[140px] rounded-full" />

      <div className="grid lg:grid-cols-2 gap-20 relative z-10">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#9a6a35] mb-4">
            Get In Touch
          </p>

          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-black leading-tight text-[#1e1208] mb-6">
            Let’s Build{" "}
            <span className="italic text-[#9a6a35]">Something Great</span>
          </h2>

          <p className="text-[#5e3b1a] text-lg leading-8 font-light max-w-[520px] mb-12">
            Have a project in mind or looking for a frontend developer to bring
            your ideas to life? I’m always open to exciting collaborations and
            opportunities.
          </p>

          {/* CONTACT ITEMS */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  x: 10,
                }}
                className="group flex items-center gap-5 bg-[#faf7f2] border border-[#f5e6d3] rounded-2xl p-5 hover:border-[#d4a574] hover:bg-[#f5e6d3] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7d5228] to-[#5e3b1a] flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs text-[#9a6a35] mb-1">
                    {item.label}
                  </p>

                  <h4 className="text-[#1e1208] font-semibold text-base group-hover:text-[#5e3b1a] transition">
                    {item.value}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Form Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5e6d3]/40 to-[#d4a574]/10 blur-3xl rounded-[40px]" />
          <div className="relative bg-[#faf7f2]/90 backdrop-blur-xl border border-[#f5e6d3] rounded-[32px] p-8 lg:p-10 shadow-xl">
            <form
              action="https://formspree.io/f/xqejjdkz"
              method="POST"
              className="space-y-6"
            >
              {/* Names */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#5e3b1a] mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="James"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-[#e8c9a0] bg-white outline-none focus:border-[#9a6a35] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#5e3b1a] mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Dahunsi"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-[#e8c9a0] bg-white outline-none focus:border-[#9a6a35] transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#5e3b1a] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="james@.com"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-[#e8c9a0] bg-white outline-none focus:border-[#9a6a35] transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[#5e3b1a] mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-[#e8c9a0] bg-white outline-none focus:border-[#9a6a35] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#5e3b1a] mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-[#e8c9a0] bg-white outline-none focus:border-[#9a6a35] transition resize-none"
                />
              </div>

              {/* Hidden Formspree Fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />

              <input type="hidden" name="_captcha" value="false" />

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#5e3b1a] to-[#7d5228] text-white font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Send Message →
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
