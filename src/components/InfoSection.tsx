import { Card } from "./ui/card";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { WavyDivider } from "./WavyDivider";

export function InfoSection() {
  const personalInfo = [
    { icon: Mail, label: "Email", value: "youremail@example.com" },
    { icon: MapPin, label: "Location", value: "Your City, Country" },
    { icon: Briefcase, label: "Experience", value: "5+ Years" },
  ];

  return (
    <section className="relative bg-[#ffd966] overflow-hidden">
      <WavyDivider flip className="text-[#0a0a0a]" />
      
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Info Card */}
            <Card className="p-8 bg-white border-0 shadow-xl">
              <h3 className="text-2xl mb-6 text-black">Avanish Singh</h3>
              <div className="space-y-4">
                {personalInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-black/60">{item.label}</p>
                        <p className="text-black">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Description Card */}
            <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                  About Me
                </span>
              </div>
              <p className="text-black/80 leading-relaxed">
                I'm a passionate UI/UX designer and graphic designer with expertise in 
                creating beautiful, user-centered digital experiences. I love bringing 
                ideas to life through thoughtful design and attention to detail.
              </p>
            </Card>
          </div>

          {/* Area of Expertise & Software Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Area of Expertise */}
            <Card className="p-8 bg-gradient-to-br from-pink-100 to-purple-100 border-0 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <h3 className="text-xl text-black">Area of Expertise</h3>
              </div>
              <div className="space-y-3">
                {["UI/UX Design", "Graphic Design", "Brand Identity", "Prototyping"].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-black/80">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Software Skills */}
            <Card className="p-8 bg-white border-0 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="text-xl text-black">Software Skills</h3>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: "Figma", icon: "🎨", color: "bg-purple-100" },
                  { name: "Ps", icon: "🖼️", color: "bg-blue-100" },
                  { name: "Ai", icon: "✨", color: "bg-orange-100" },
                  { name: "Ae", icon: "🎬", color: "bg-pink-100" },
                  { name: "XD", icon: "💎", color: "bg-pink-100" },
                  { name: "Id", icon: "📄", color: "bg-red-100" },
                  { name: "Pr", icon: "🎥", color: "bg-purple-100" },
                  { name: "Lr", icon: "📸", color: "bg-blue-100" },
                ].map((software, index) => (
                  <div
                    key={index}
                    className={`${software.color} rounded-xl p-4 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform`}
                  >
                    <span className="text-2xl mb-1">{software.icon}</span>
                    <span className="text-xs text-black/70">{software.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <WavyDivider className="text-[#ffd966]" />
    </section>
  );
}