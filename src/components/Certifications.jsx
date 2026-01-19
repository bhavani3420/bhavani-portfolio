import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Course Completion Certificate – Web Development',
      issuer: 'Rinex Organization',
      link: 'https://drive.google.com/open?id=1iLi8NMYKINivBIkDYn7mLby6j5G93lTP',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Internship Completion Certificate – Web Development',
      issuer: 'Rinex Technologies (in partnership with Future Netwings)',
      link: 'https://drive.google.com/open?id=10JzuNAdwhzDhZkVYiryIvcg0A2il4iH1',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database Management System – Part 1',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/open?id=1LT7LaPrF52rPfRBNBrWHDAo9jgu-NfDl',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Programming Using Java',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/open?id=1fHP4l61aKMocrboWI4vtTsyLJfHpM709',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Pragati: Path to Future – Cohort 5',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/open?id=1MNjBeLpZpjaWF6zcpycVtTr41M3LFcgj',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Learning Python',
      issuer: 'LinkedIn Learning',
      link: 'https://drive.google.com/open?id=1FOE7Y8G1BN4rDVPQ9ZUZdUdetvQNEUP0',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'My APSSDC – Web Design (UI/UX)',
      issuer: 'GUVI Geek Networks (Supported by APSSDC)',
      link: 'https://drive.google.com/open?id=1jmNRDNnFMuxUaKog9q_n3b1mdg34kpXD',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Smart India Hackathon (SIH) 2025 – Participation',
      issuer: "RGUKT Nuzvid",
      link: 'https://drive.google.com/open?id=1AB-8jlIUuKL_mmA9qcjAZsazbgchpnJ4',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      title: 'Flipkart Grid Challenge – Participation',
      issuer: 'Flipkart',
      link: 'https://drive.google.com/open?id=1O1AZvz7kH40shlGms6YyPBzUFd2RX13z',
      color: 'from-rose-500 to-pink-500',
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
              <span className="text-white">Certifications & </span>
              <span className="text-gradient-neon">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} group-hover:scale-110 transition-transform`}
                  >
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient-neon transition-all">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>View Certificate</span>
                      <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
