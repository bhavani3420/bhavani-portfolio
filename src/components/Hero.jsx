import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Specialist",
    "AI & ML Enthusiast",
    "Software Engineer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout;
    const role = roles[currentRole];
    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex < role.length) {
        setDisplayText(role.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeWriter, 100);
      } else {
        timeout = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2000);
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, [currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-cyan-400 font-medium">
              Hi, my name is
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Bhavani </span>
            <span className="text-gradient-neon">Saladi</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div variants={itemVariants} className="mb-8 h-16 md:h-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">
              I'm a{" "}
              <span className="text-gradient-neon inline-block min-w-[220px] md:min-w-[340px]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-8 md:h-12 bg-cyan-400 ml-1"
                />
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer skilled in React, HTML, CSS, JavaScript, and the
            MERN stack. Strong interest in Artificial Intelligence and Machine
            Learning, with hands-on knowledge of core ML concepts and continuous
            learning in data-driven and intelligent systems. Passionate about
            building scalable, high-performance, and user-centric applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="#resume"
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://github.com/bhavani3420"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/bhavani-saladi-758373286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-2xl transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <FiArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
