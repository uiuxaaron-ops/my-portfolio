import { useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { useMagneticEffect } from "./hooks/useMagneticEffect";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const sendButton = useMagneticEffect(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-scroll
          data-scroll-speed="1"
        >
          <h2 className="font-['Prata',serif] text-[64px] text-white mb-4">
            Get In Touch
          </h2>
          <p className="font-['JetBrains_Mono',sans-serif] font-light text-[16px] text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about design? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-[#1b1b1b]/40 backdrop-blur-xl p-8 lg:p-10 rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="0.5"
          >
            <h3 className="font-['Prata',serif] text-[32px] text-white mb-8 text-center">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-3 font-['JetBrains_Mono',sans-serif] text-[12px] text-white/80 uppercase tracking-wider">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f]/60 backdrop-blur-xl border border-white/10 rounded-[20px] focus:border-white/40 focus:outline-none text-white font-['JetBrains_Mono',sans-serif] placeholder:text-white/40 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 font-['JetBrains_Mono',sans-serif] text-[12px] text-white/80 uppercase tracking-wider">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f]/60 backdrop-blur-xl border border-white/10 rounded-[20px] focus:border-white/40 focus:outline-none text-white font-['JetBrains_Mono',sans-serif] placeholder:text-white/40 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 font-['JetBrains_Mono',sans-serif] text-[12px] text-white/80 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0f0f0f]/60 backdrop-blur-xl border border-white/10 rounded-[20px] focus:border-white/40 focus:outline-none text-white font-['JetBrains_Mono',sans-serif] placeholder:text-white/40 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] transition-all resize-none"
                />
              </div>

              <motion.button
                ref={sendButton.ref as any}
                type="submit"
                className="w-full px-8 py-4 bg-white text-black rounded-[20px] font-['JetBrains_Mono',sans-serif] font-extrabold flex items-center justify-center gap-2 group shadow-[0_4px_16px_0_rgba(255,255,255,0.3)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.4)] transition-all hover:bg-white/90"
                style={{
                  x: sendButton.position.x,
                  y: sendButton.position.y,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-scroll
            data-scroll-speed="1.2"
          >
            <div className="bg-[#1b1b1b]/40 backdrop-blur-xl p-8 rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex-1">
              <h3 className="font-['Prata',serif] text-[32px] text-white mb-8 text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:uiuxaaron@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f]/60 backdrop-blur-xl rounded-[20px] border border-white/10 hover:border-white/30 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.08)] transition-all group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-12 h-12 bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[20px] flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-white/30 transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-['JetBrains_Mono',sans-serif] text-[10px] text-white/60 mb-1 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[14px] text-white break-all">
                      uiuxaaron@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/aaronbsaigal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f]/60 backdrop-blur-xl rounded-[20px] border border-white/10 hover:border-white/30 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.08)] transition-all group"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="w-12 h-12 bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[20px] flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-white/30 transition-all">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-['JetBrains_Mono',sans-serif] text-[10px] text-white/60 mb-1 uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[14px] text-white break-all">
                      linkedin.com/in/aaronbsaigal
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-[#1b1b1b]/40 backdrop-blur-xl p-8 rounded-[20px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <h4 className="font-['JetBrains_Mono',sans-serif] text-[18px] text-white mb-6 text-center">
                Also Find Me On
              </h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-[#0f0f0f]/60 backdrop-blur-xl text-white rounded-[20px] border border-white/10 hover:border-white/30 hover:bg-white hover:text-black shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.3)] transition-all text-center font-['JetBrains_Mono',sans-serif] font-extrabold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Behance
                </motion.a>
                <motion.a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-[#0f0f0f]/60 backdrop-blur-xl text-white rounded-[20px] border border-white/10 hover:border-white/30 hover:bg-white hover:text-black shadow-[0_4px_16px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.3)] transition-all text-center font-['JetBrains_Mono',sans-serif] font-extrabold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dribbble
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px bg-white/10 mb-8" />
          <p className="font-['JetBrains_Mono',sans-serif] text-[14px] text-white/60">
            © 2025 Aaron B Saigal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
