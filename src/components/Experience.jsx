import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'DevSecEngOps',
      location: 'Remote',
      period: 'Mar 2024 – Present',
      description: [
        'Developed responsive frontend features using React, improving performance by 30%',
        'Revamped internal dashboards using Figma prototypes for UI/UX improvements',
        'Collaborated with a 6-member team using GitHub and daily standups for Agile development',
        'Created reusable components and integrated REST APIs for backend services',
        'Contributed to documentation and onboarding guides, enhancing team productivity',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
              <span className="text-white">Work </span>
              <span className="text-gradient-neon">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-glow`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, type: 'spring' }}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      className="glass rounded-xl p-6 hover:shadow-glow transition-all"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color}`}>
                          <FiBriefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold mb-1">
                            {exp.company}
                          </p>
                          <p className="text-gray-400 text-sm mb-2">
                            {exp.location} • {exp.period}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

