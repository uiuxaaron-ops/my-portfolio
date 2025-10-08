import { Figma, Palette, Layout, Pen, Image as ImageIcon, Layers } from "lucide-react";
import { motion } from "motion/react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

export function Skills() {
  const skills: Skill[] = [
    {
      name: "UI/UX Design",
      icon: <Layout className="w-8 h-8" />,
      category: "Design",
    },
    {
      name: "Wireframing",
      icon: <Layers className="w-8 h-8" />,
      category: "Design",
    },
    {
      name: "Prototyping",
      icon: <Pen className="w-8 h-8" />,
      category: "Design",
    },
    {
      name: "Graphic Design",
      icon: <Palette className="w-8 h-8" />,
      category: "Design",
    },
    {
      name: "Branding",
      icon: <ImageIcon className="w-8 h-8" />,
      category: "Design",
    },
    {
      name: "Figma",
      icon: <Figma className="w-8 h-8" />,
      category: "Tools",
    },
  ];

  const tools = [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Framer",
    "After Effects",
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
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
            Skills & Tools
          </h2>
          <p className="font-['JetBrains_Mono',sans-serif] font-light text-[16px] text-white/80 max-w-2xl mx-auto">
            Expertise in design tools and creative technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1b1b1b]/40 backdrop-blur-xl p-8 rounded-[20px] border border-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              data-scroll
              data-scroll-speed={0.5 + (index % 3) * 0.3}
            >
              <div className="text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>
              <h3 className="font-['JetBrains_Mono',sans-serif] font-extrabold text-[18px] text-white mb-2">
                {skill.name}
              </h3>
              <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-white/60 uppercase tracking-wider">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          className="bg-[#1b1b1b]/40 backdrop-blur-xl p-12 rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="0.8"
        >
          <div className="text-center mb-10">
            <h3 className="font-['Prata',serif] text-[32px] text-white mb-3">
              Tools & Software
            </h3>
            <p className="font-['JetBrains_Mono',sans-serif] font-light text-[14px] text-white/60">
              Technologies I work with daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="relative bg-[#0f0f0f]/60 backdrop-blur-xl p-6 rounded-[20px] border border-white/10 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_48px_0_rgba(255,255,255,0.1),0_0_24px_0_rgba(255,255,255,0.05)] transition-all duration-300 text-center group overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -6,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500 rounded-[20px]" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <p className="font-['JetBrains_Mono',sans-serif] text-[14px] text-white/90 group-hover:text-white group-hover:font-extrabold transition-all duration-300 relative z-10">
                  {tool}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
