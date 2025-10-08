import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageCircle, X, Mail } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollTimer: any;
    
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        // Show after scrolling 300px
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollY > 300);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
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
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-[9997]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-20 right-0 bg-[#1b1b1b]/90 backdrop-blur-xl rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-4 w-64"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <p className="font-['JetBrains_Mono',sans-serif] text-[14px] text-white/80 mb-4">
                  Have a project in mind?
                </p>
                <motion.button
                  onClick={scrollToContact}
                  className="w-full px-4 py-3 bg-white text-black rounded-[20px] font-['JetBrains_Mono',sans-serif] font-extrabold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  Let's Talk
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: isOpen
                ? "0 8px 32px 0 rgba(0,0,0,0.37)"
                : [
                    "0 8px 32px 0 rgba(0,0,0,0.37)",
                    "0 8px 48px 0 rgba(255,255,255,0.3)",
                    "0 8px 32px 0 rgba(0,0,0,0.37)",
                  ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: isOpen ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <MessageCircle className="w-6 h-6 text-black" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
