import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function About() {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  
  const normalizedX = isHovered && cardRef.current ? (mousePos.x / cardRef.current.offsetWidth) * 2 - 1 : 0;
  const normalizedY = isHovered && cardRef.current ? (mousePos.y / cardRef.current.offsetHeight) * 2 - 1 : 0;

  const rotateX = useSpring(normalizedY * -10, springConfig);
  const rotateY = useSpring(normalizedX * 10, springConfig);

  return (
    <section id="about" className="py-32 bg-transparent text-center px-6 relative flex justify-center perspective-1000">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); rotateX.set(0); rotateY.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="max-w-4xl w-full p-10 md:p-16 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl shadow-black/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden group interactive-element transition-all duration-300 z-10"
      >
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
          }}
        />

        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />
        
        <h2 className="text-4xl md:text-5xl font-bold space-font text-white mb-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
          About Me
        </h2>

       <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed font-light relative z-10" style={{ transform: "translateZ(40px)" }}>
  I'm Ayush Patnayak, a developer focused on building modern and interactive web applications while using data to create smarter user experiences. I focus on <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 drop-shadow-sm">clean UI</span>, <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 drop-shadow-sm">smooth interactions</span>, and <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 drop-shadow-sm">data-driven thinking</span>. My goal is to turn ideas into experiences that are not only functional, but meaningful and engaging.
</p>
      </motion.div>
    </section>
  );
}