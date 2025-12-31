import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Learning Python',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/c674dfb6df9f670b67c479643a4c99cec34a7593110876eca8a43a20bb62fc3f',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Django Essentials',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/9f526b31e1f02598c552cee8fbf4c6b1f75b479f3ce8fbab762d1575633637c0',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Career Essentials in GitHub',
      issuer: 'LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/8f8e9ed98d86054fae4bbc7bb2f5192ae1fa2b815fa830134d068d7401769f7d',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'UI/UX Design',
      issuer: 'GUVI',
      link: 'https://www.guvi.in/verify-certificate?id=ki7g911L7900811W19',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 relative">
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
              <span className="text-white dark:text-white light:text-gray-900">Certifications & </span>
              <span className="text-gradient-neon">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto">
              Professional certifications and notable achievements
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group glass rounded-xl p-6 hover:shadow-glow transition-all block"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} group-hover:scale-110 transition-transform`}>
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-1 group-hover:text-gradient-neon transition-all">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                      <span>View Certificate</span>
                      <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gradient-neon">
              Notable Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                '3rd Prize – HackVyuha\'25',
                'Infosys Springboard Pragathi Path to Future Program',
                'Maintained CGPA of 9.0',
                'GSSoC\'25 Contributor',
                'Flipkart Grid 7.0 Semifinalist',
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-lg p-4 text-center hover:shadow-glow transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white dark:text-white light:text-gray-900 text-sm font-medium">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;



