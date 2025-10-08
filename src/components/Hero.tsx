import { motion } from "motion/react";
import { useEffect, useRef } from "react";

function MarqueeText() {
  return (
    <div className="content-stretch flex font-['JetBrains_Mono',sans-serif] font-extrabold gap-[60px] items-center justify-center leading-[normal] text-white">
      <p className="relative shrink-0 text-[128px] text-nowrap whitespace-pre">ui/ux design</p>
      <p className="relative shrink-0 text-[250px] text-center">.</p>
      <p className="relative shrink-0 text-[128px] text-nowrap whitespace-pre">user research</p>
      <p className="relative shrink-0 text-[250px] text-center">.</p>
      <p className="relative shrink-0 text-[128px] text-nowrap whitespace-pre">graphic design</p>
      <p className="relative shrink-0 text-[250px] text-center">.</p>
      <p className="relative shrink-0 text-[128px] text-nowrap whitespace-pre">strategy</p>
    </div>
  );
}

function ScrollingMarquee() {
  return (
    <div className="absolute h-[448px] left-0 right-0 overflow-hidden pointer-events-none">
      <motion.div
        className="flex gap-[128px] items-center absolute whitespace-nowrap will-change-transform"
        animate={{ x: [0, -2320] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        <MarqueeText />
        <MarqueeText />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Blurred Background Element */}
      <motion.div 
        className="absolute flex h-[1048.185px] items-center justify-center top-[-312px] right-[-100px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        data-scroll
        data-scroll-speed="-0.5"
      >
        <div className="rotate-[41.823deg]">
          <div className="bg-[#9f9f9f] blur-[515.85px] filter h-[1037px] w-[413px]" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div 
        className="absolute left-[calc(8.333%+58px)] top-[229px] content-stretch flex flex-col gap-[16px] items-start w-[582px] z-10"
        data-scroll
        data-scroll-speed="0.3"
      >
        <motion.div
          className="font-['Prata',serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[48px] text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm Aaron,
          </motion.p>
          <motion.p 
            className="mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            a ui ux / graphic designer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            from kerala.
          </motion.p>
        </motion.div>
        
        <motion.p
          className="font-['JetBrains_Mono',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] text-white w-[371px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          I'm a UI/UX and Graphic Designer passionate about crafting clean, modern, and user-centered designs. I focus on creating seamless digital experiences that balance creativity with functionality.
        </motion.p>
      </div>

      {/* Scrolling Text Marquees */}
      <div 
        className="absolute left-0 right-0 top-[507px]"
        data-scroll
        data-scroll-speed="1"
      >
        <ScrollingMarquee />
      </div>

      <div 
        className="absolute left-0 right-0 top-[635px] pointer-events-none"
        data-scroll
        data-scroll-speed="-0.5"
      >
        <motion.div
          className="flex gap-[128px] items-center absolute whitespace-nowrap will-change-transform"
          animate={{ x: [-2320, 0] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          <MarqueeText />
          <MarqueeText />
        </motion.div>
      </div>
    </section>
  );
}
