import { motion } from "framer-motion";

const MailIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5..." />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4..." />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center px-6 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Let's Connect
        </h2>

        {/* Description */}
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          Have an idea or just want to say hi? <br className="hidden md:block" />
          Let’s build something amazing 🚀
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">

          {/* Email */}
          <motion.a
            href="mailto:ayushpatnayak07@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ayush%2C%0A%0AI%20came%20across%20your%20portfolio..."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition shadow-lg hover:shadow-xl"
          >
            <MailIcon className="w-5 h-5" />
            Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Ayushp-123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full transition hover:bg-white/10"
          >
            <GithubIcon className="w-5 h-5" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ayush-patnayak-485bb33b8/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full transition hover:bg-white/10 hover:text-blue-400"
          >
            <LinkedinIcon className="w-5 h-5" />
            Connect on LinkedIn →
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}