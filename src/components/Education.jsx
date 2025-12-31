import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Pre-University Course (PUC)',
      institution: 'Rajiv Gandhi University of Knowledge and Technologies (RGUKT)',
      location: 'Nuzvid, India',
      period: '2021 – 2023',
      description:
        'Completed foundational coursework in Mathematics, Physics, Chemistry, and Computer Science, building a strong base for engineering studies.',
      gpa: 'CGPA: 9.75/10.0',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Rajiv Gandhi University of Knowledge and Technologies (RGUKT)',
      location: 'Nuzvid, India',
      period: '2023 – 2027',
      description:
        'Relevant Courses: Data Structures, DBMS, OOP, Web Development, Operating Systems',
      gpa: 'CGPA: 9.0/10.0',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Minor Degree in Machine Learning',
      institution: 'Rajiv Gandhi University of Knowledge and Technologies (RGUKT)',
      location: 'Nuzvid, India',
      period: '2025 – 2027',
      description:
        'Specialized coursework in Machine Learning and Artificial Intelligence applications.',
      gpa: 'In Progress',
      color: 'from-purple-500 to-pink-500',
    },
  ];

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
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} p-4 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <FiBook className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-neon transition-all">
                    {edu.degree}
                  </h3>

                  <p className="text-cyan-400 font-semibold mb-2">
                    {edu.institution}
                  </p>

                  <p className="text-gray-400 text-sm mb-3">
                    {edu.location} • {edu.period}
                  </p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-400">GPA/Score</span>
                    <span
                      className={`font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                    >
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
