import svgPaths from "../imports/svg-44w7g8fwkt";
import { motion } from "motion/react";
import { useMagneticEffect } from "./hooks/useMagneticEffect";

function DownloadIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p28162d00} fill="currentColor" />
      </svg>
    </div>
  );
}

export function Navigation() {
  const resumeButton = useMagneticEffect(0.3);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Check if locomotive scroll exists
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        locomotiveScroll.scrollTo(element, {
          offset: 0,
          duration: 1000,
          easing: [0.25, 0.0, 0.35, 1.0]
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-[21px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1296px] mx-auto box-border content-stretch flex items-center justify-between p-[16px] bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Logo */}
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
          <div className="bg-white rounded-[84px] shrink-0 size-[43px] shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
          <p className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
            AARON
          </p>
        </div>

        {/* Menu Items */}
        <div className="content-stretch flex gap-[4px] sm:gap-[12px] md:gap-[20px] items-center relative shrink-0">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="hidden md:block font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre transition-all"
            whileHover={{ scale: 1.1, y: -2, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            /Home
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("about")}
            className="hidden md:block font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre transition-all"
            whileHover={{ scale: 1.1, y: -2, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            /About
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] sm:text-[13px] md:text-[14px] text-nowrap text-white whitespace-pre transition-all"
            whileHover={{ scale: 1.1, y: -2, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            /Project
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="font-['JetBrains_Mono',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11px] sm:text-[13px] md:text-[14px] text-nowrap text-white whitespace-pre transition-all"
            whileHover={{ scale: 1.1, y: -2, color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
          >
            /Contact
          </motion.button>
          
          {/* Resume Button */}
          <motion.a
            ref={resumeButton.ref as any}
            href="/Aaron_B_Saigal_Resume.pdf"
            download="Aaron_B_Saigal_Resume.pdf"
            className="bg-white box-border content-stretch flex gap-[4px] sm:gap-[6px] md:gap-[8px] h-[36px] sm:h-[40px] md:h-[44px] items-center justify-center p-[6px] sm:p-[6px] md:p-[8px] relative rounded-[16px] sm:rounded-[18px] md:rounded-[20px] shrink-0 w-[70px] sm:w-[90px] md:w-[120px] hover:bg-gray-100 transition-all hover:shadow-[0_4px_16px_rgba(255,255,255,0.3)] group cursor-pointer"
            style={{
              x: resumeButton.position.x,
              y: resumeButton.position.y,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: [0, 10, -10, 0] }}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center shrink-0"
            >
              <DownloadIcon />
            </motion.div>
            <p className="font-['JetBrains_Mono',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[10px] sm:text-[11px] md:text-[14px] text-black text-nowrap whitespace-pre hidden xs:block">
              resume
            </p>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
