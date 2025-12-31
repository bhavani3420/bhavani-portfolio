import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const RESUME_URL = "/Resume_Bhavani_Saladi.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Bhavani_Saladi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(RESUME_URL, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Resume & </span>
              <span className="text-gradient-neon">CV</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Download or preview my resume to learn more about my experience and skills
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.button
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download PDF
            </motion.button>

            <motion.button
              onClick={handlePreview}
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/20 transition-all flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiEye className="w-5 h-5" />
              Preview Online
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
