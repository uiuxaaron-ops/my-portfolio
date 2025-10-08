import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | "UI/UX Design" | "Graphic Design">("All");
  const [isLoading, setIsLoading] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "UI/UX Design",
      description: "Complete redesign of a modern e-commerce platform with focus on conversion and user experience",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?w=800",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Intuitive mobile banking experience with biometric authentication and simplified navigation",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?w=800",
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Graphic Design",
      description: "Complete brand identity including logo, color palette, typography, and brand guidelines",
      image: "https://images.unsplash.com/photo-1633533448522-26ee3eab7961?w=800",
    },
    {
      id: 4,
      title: "Restaurant Menu Design",
      category: "Graphic Design",
      description: "Modern and elegant menu design with custom illustrations and typography",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800",
    },
    {
      id: 5,
      title: "Fitness Tracking Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive fitness dashboard with data visualization and goal tracking features",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
    },
    {
      id: 6,
      title: "Event Poster Series",
      category: "Graphic Design",
      description: "Creative poster series for music festival with vibrant colors and bold typography",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-32 px-6 lg:px-12 bg-[#0f0f0f] relative overflow-hidden"
    >
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
            Selected Works
          </h2>
          <p className="font-['JetBrains_Mono',sans-serif] font-light text-[16px] text-white/80 max-w-2xl mx-auto">
            A showcase of my recent design projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div 
          className="flex justify-center gap-4 mb-12"
          data-scroll
          data-scroll-speed="0.5"
        >
          {(["All", "UI/UX Design", "Graphic Design"] as const).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => {
                setIsLoading(true);
                setActiveFilter(filter);
                setTimeout(() => setIsLoading(false), 400);
              }}
              className={`font-['JetBrains_Mono',sans-serif] px-6 py-3 rounded-[20px] transition-all ${
                activeFilter === filter
                  ? "bg-white text-black font-extrabold shadow-[0_4px_16px_0_rgba(255,255,255,0.3)]"
                  : "bg-[#1b1b1b]/40 backdrop-blur-xl text-white border border-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Loading Animation */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[20px] overflow-hidden border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                >
                  {/* Image Skeleton */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    />
                  </div>
                  
                  {/* Content Skeleton */}
                  <div className="p-6 space-y-3">
                    {/* Title Skeleton */}
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="h-5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg w-2/3 relative overflow-hidden"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                        />
                      </motion.div>
                      <motion.div
                        className="w-5 h-5 bg-white/10 rounded"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    
                    {/* Category Skeleton */}
                    <motion.div
                      className="h-3 bg-gradient-to-r from-white/5 to-white/10 rounded w-1/3 relative overflow-hidden"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 + 0.3 }}
                      />
                    </motion.div>
                    
                    {/* Description Skeleton */}
                    <div className="space-y-2">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-white/5 to-white/10 rounded w-full relative overflow-hidden"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 + 0.5 }}
                        />
                      </motion.div>
                      <motion.div
                        className="h-3 bg-gradient-to-r from-white/5 to-white/10 rounded w-4/5 relative overflow-hidden"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 + 0.7 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        {!isLoading && (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[20px] overflow-hidden border border-white/10 hover:border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-scroll
                data-scroll-speed={0.3 + (index % 3) * 0.2}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['JetBrains_Mono',sans-serif] font-extrabold text-[18px] text-white">
                      {project.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0, scale: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-white/60 mb-3 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <p className="font-['JetBrains_Mono',sans-serif] font-light text-[14px] text-white/80">
                    {project.description}
                  </p>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
