import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const skills = [
  { name: "JavaScript", desc: "Building dynamic and interactive web applications" },
  { name: "HTML & CSS", desc: "Structuring and styling responsive web interfaces" },
  { name: "React", desc: "Creating scalable and component-based user interfaces" },
  { name: "Tailwind CSS", desc: "Designing modern, responsive, and clean UI" },
  { name: "Framer Motion", desc: "Adding smooth animations and micro-interactions" },

  { name: "Python", desc: "Data analysis, scripting, and problem solving" },
  { name: "C / C++", desc: "Core programming, logic building, and problem solving" },

  { name: "MySQL", desc: "Managing and querying structured data efficiently" },
  { name: "Node.js", desc: "Building backend logic and APIs" },
  { name: "Next.js", desc: "Developing fast and SEO-friendly web applications" },

  { name: "UI/UX", desc: "Designing intuitive and user-focused experiences" },
  { name: "Data Thinking", desc: "Using data to improve decisions and user experience" },
];
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="py-32 bg-transparent text-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white space-font tracking-tight mb-16"
        >
          My Arsenal
        </motion.h2>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-20"
        >
          {skills.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)"
              }}
              className="relative px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-lg font-medium text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:bg-white/10 interactive-element z-10"
            >
              {s.name}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0, y: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-gray-900 text-sm rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-50"
                  >
                    {s.desc}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}