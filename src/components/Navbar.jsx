import { motion } from "framer-motion";

/* 🔥 FORCE VISIBLE ICONS */
const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.33 1.09 2.9.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] py-6 px-8 md:px-14 flex justify-between items-center pointer-events-none">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-auto"
      >
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Ayush.
        </h1>
      </motion.div>

      {/* Icons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-4 pointer-events-auto"
      >

        {/* GitHub */}
        <motion.a
          href="https://github.com/Ayushp-123"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full 
          bg-black/40 border border-white/30 
          backdrop-blur-lg
          hover:bg-black/60
          transition-all duration-300
          shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <GithubIcon className="w-5 h-5" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/ayush-patnayak-485bb33b8/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full 
          bg-black/40 border border-white/30 
          backdrop-blur-lg
          hover:bg-black/60
          transition-all duration-300
          shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <LinkedinIcon className="w-5 h-5" />
        </motion.a>

      </motion.div>
    </nav>
  );
}