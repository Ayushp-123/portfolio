import { useState, useEffect } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";

export default function Hero() {
  const headingText = "Ayush";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
const phrases = [
  "web Developer",
  "Data Science Enthusiast",
  "Turning Data into Experiences"
];
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  // Mouse X drives Rotate Y, Mouse Y drives Rotate X
  const targetRotateX = mousePosition.y * -20;
  const targetRotateY = mousePosition.x * 20;
  
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    rotateX.set(targetRotateX);
    rotateY.set(targetRotateY);
  }, [targetRotateX, targetRotateY, rotateX, rotateY]);

  return (
    <section id="top" className="relative min-h-screen flex items-center px-8 md:px-14 overflow-hidden perspective-1000">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* LEFT: Text Content */}
        <div className="max-w-2xl w-full pt-20 md:pt-0 relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm tracking-[0.3em] text-gray-400 mb-6 font-medium uppercase"
          >
            HEY, I'M
          </motion.p>

          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter space-font block overflow-hidden leading-[0.9] -ml-1 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400 pb-4">
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <div className="h-10 mt-4 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-violet-400 space-font absolute inset-0 whitespace-nowrap"
              >
                {phrases[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 max-w-lg"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
  I transform data into interactive and visually engaging web experiences, blending performance, design, and smart thinking.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="interactive-element px-8 py-4 bg-white text-gray-900 rounded-full font-medium transition-all duration-300 btn-glow shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]"
            >
              View Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="interactive-element px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT: 3D Character with Parallax & Glow */}
        <div className="flex-1 w-full flex items-center justify-center relative mt-16 md:mt-0 z-0">
          {/* Radial Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/40 rounded-full blur-[100px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center will-change-transform z-10"
          >
            <motion.img 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="/avatar.png" 
              alt="3D Boy Character" 
              className="w-full h-full object-contain drop-shadow-2xl mix-blend-normal"
              style={{ translateZ: 50 }}
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
              style={{ translateZ: 100 }}
              className="absolute -top-10 md:top-10 -right-10 md:-right-4 bg-[#050505] px-6 py-3 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.3)] border border-white/10"
            >
              <p className="text-white font-medium text-lg flex items-center gap-2">
                Hey <span className="text-2xl animate-wave">👋</span> Welcome!
              </p>
              <div className="absolute -bottom-2 left-10 w-4 h-4 bg-[#050505] border-b border-r border-white/10 transform rotate-45" />
            </motion.div>
          </motion.div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave { animation: wave 2.5s infinite; transform-origin: 70% 70%; display: inline-block; }
      `}} />
    </section>
  );
}