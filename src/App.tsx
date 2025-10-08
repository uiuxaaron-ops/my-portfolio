import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageTransition } from "./components/PageTransition";
import { FloatingContact } from "./components/FloatingContact";
import { useEffect, useRef } from "react";

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locomotiveScroll: any;
    let resizeTimer: any;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: false, // Disable on mobile for better performance
            direction: 'vertical',
            multiplier: 1.2,
            lerp: 0.08,
            repeat: true,
            class: "is-inview",
            reloadOnContextChange: false,
            resetNativeScroll: true,
            smartphone: {
              smooth: false
            },
            tablet: {
              smooth: true,
              multiplier: 1.5,
              lerp: 0.1
            }
          });

          // Make locomotive scroll available globally for navigation
          (window as any).locomotiveScroll = locomotiveScroll;

          // Debounced resize handler for better performance
          const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
              if (locomotiveScroll) {
                locomotiveScroll.update();
              }
            }, 150);
          };

          window.addEventListener('resize', handleResize);
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    };

    // Wait for page transition to complete
    const timeout = setTimeout(() => {
      initLocomotiveScroll();
    }, 900);

    return () => {
      clearTimeout(timeout);
      clearTimeout(resizeTimer);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        (window as any).locomotiveScroll = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <PageTransition />
      <CustomCursor />
      <ScrollProgress />
      <FloatingContact />
      <Navigation />
      <main ref={scrollRef} data-scroll-container>
        <div data-scroll-section>
          <Hero />
        </div>
        <div data-scroll-section>
          <About />
        </div>
        <div data-scroll-section>
          <Projects />
        </div>
        <div data-scroll-section>
          <Skills />
        </div>
        <div data-scroll-section>
          <Contact />
        </div>
      </main>
    </div>
  );
}
