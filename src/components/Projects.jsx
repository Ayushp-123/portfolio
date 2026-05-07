import { useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Vita Rescue",
    desc: "Built a mobile emergency assistance application that helps users access support, emergency contacts, and vital resources instantly.",
    tech: ["React Native", "JavaScript"],
    link: "https://github.com/Ayushp-123/Vita-Rescue",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "GCE Grievance Engine",
    desc: "Built a full-stack grievance management system that allows users to submit and track complaints while enabling admins to manage and resolve issues efficiently.",
    tech: ["React", "Node.js", "MySQL"],
    link: "https://github.com/Ayushp-123/gce-grievance-engine",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] overflow-hidden flex flex-col h-full transition-all duration-300 group z-10"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(139, 92, 246, 0.15), 0 0 40px rgba(99,102,241,0.3)"
          : "0 4px 6px rgba(0,0,0,0.5)",
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 mix-blend-overlay"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.3), transparent 40%)`,
        }}
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-6 flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 border border-white/10 text-gray-300 rounded-md text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-violet-400 transition"
          >
            View Project →
          </a>
        ) : (
          <span className="text-gray-500 text-sm">
            Not Deployed
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}