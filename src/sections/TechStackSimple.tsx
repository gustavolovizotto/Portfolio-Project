import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const techStack: TechItem[] = [
  // Frontend
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400", category: "Frontend" },
  { name: "React Native", icon: "📱", color: "from-blue-500 to-purple-500", category: "Mobile" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900", category: "Frontend" },
  { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800", category: "Language" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-teal-500", category: "Styling" },
  
  // Backend
  { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700", category: "Backend" },
  { name: "NestJS", icon: "🐱", color: "from-red-500 to-pink-600", category: "Backend" },
  
  // Database
  { name: "MySQL", icon: "🗄️", color: "from-orange-400 to-orange-600", category: "Database" },
  
  // Cloud & DevOps
  { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500", category: "Cloud" },
  
  // Monitoring & Analytics
  { name: "New Relic", icon: "📊", color: "from-emerald-400 to-teal-500", category: "Monitoring" },
  { name: "Metabase", icon: "📈", color: "from-purple-500 to-indigo-600", category: "Analytics" },
  
  // Integrations
  { name: "Meta Integrations", icon: "🔗", color: "from-blue-600 to-indigo-700", category: "Integration" },
];

const TechStackSimple = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate tech cards
    const cards = gsap.utils.toArray(".tech-card");
    cards.forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <TitleHeader
        title="Tech Stack"
        sub="🛠️ Tecnologias e Ferramentas que Domino"
      />
      <section
        id="skills"
        ref={sectionRef}
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-transparent to-black/20"
      >
        <div className="max-w-7xl mx-auto">
          {/* All Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-card group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="relative text-white font-semibold text-sm text-center group-hover:text-purple-300 transition-colors">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full shadow-lg">
                      {tech.category}
                    </span>
                  </div>
                </div>

                {/* Floating Animation */}
                <style>{`
                  .tech-card:nth-child(${index + 1}) {
                    animation: float${index % 3} 3s ease-in-out infinite;
                    animation-delay: ${index * 0.1}s;
                  }
                  
                  @keyframes float0 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                  }
                  
                  @keyframes float1 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                  }
                  
                  @keyframes float2 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStackSimple;
