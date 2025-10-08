import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 bg-[#0f0f0f] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="1"
        >
          <h2 className="font-['Prata',serif] text-[64px] text-white mb-6">
            About Me
          </h2>
          <p className="font-['JetBrains_Mono',sans-serif] font-light text-[16px] text-white/80 max-w-2xl mx-auto">
            A passionate designer focused on creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-scroll
            data-scroll-speed="0.5"
          >
            <div className="font-['JetBrains_Mono',sans-serif] font-light text-[16px] text-white/90 space-y-6 leading-relaxed">
              <p>
                I'm Aaron B Saigal, a UI/UX and Graphic Designer from Kerala. As a fresh graduate and design enthusiast, I'm passionate about crafting clean, modern, and user-centered designs.
              </p>
              <p>
                My approach combines creativity with functionality, ensuring that every design not only looks beautiful but also serves its purpose effectively. I believe in the power of simplicity and the importance of user research in creating exceptional digital experiences.
              </p>
              <p>
                When I'm not designing, you can find me exploring new design trends, learning about emerging technologies, or contributing to the design community.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-scroll
            data-scroll-speed="1.5"
          >
            {[
              { label: "Experience", value: "Fresh Graduate" },
              { label: "Location", value: "Kerala, India" },
              { label: "Focus", value: "UI/UX & Graphic Design" },
              { label: "Status", value: "Available for Hire" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1b1b1b]/40 backdrop-blur-xl p-6 rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: "rgba(255,255,255,0.3)",
                  y: -4,
                  boxShadow: "0 12px 40px 0 rgba(0,0,0,0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-white/60 mb-2 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="font-['JetBrains_Mono',sans-serif] font-extrabold text-[18px] text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
