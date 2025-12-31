import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'BreatheSafe',
      description: 'A real-time AQI tracker with 24-hour forecasting, health recommendations, and Twilio-based SMS alerts. Applied MongoDB for user history and caching, achieving 25% faster load times.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['MERN', 'Machine Learning', 'MongoDB', 'React Context API'],
      github: 'https://github.com/bhavani3420/BreatheSafe_Project',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'RGUKT SuccessHub',
      description: 'An anonymous discussion platform with role-based access and secure user authentication. Improved engagement by 30% via UI and backend optimization using Express and MongoDB.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      tags: ['MERN', 'Express', 'MongoDB', 'React'],
      github: 'https://github.com/bhavani3420',
      live: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'E-Commerce UI',
      description: 'A responsive e-commerce UI with modular components. Developed using HTML, CSS, and JavaScript with focus on user experience and modern design principles.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bhavani3420/Ecommerce',
      live: '#',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Expense Tracker',
      description: 'A personal budgeting app with local storage integration. Enabled adding, editing, and deleting expenses with real-time updates and intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/bhavani3420/CodeAlpha_Expense_Tracker',
      live: '#',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing skills, certifications, and projects. Developed with HTML, CSS, and JavaScript featuring modern design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bhavani3420/Portfolio',
      live: '#',
      color: 'from-yellow-500 to-orange-500',
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
    <section id="projects" className="py-20 relative">
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
              <span className="text-white">Featured </span>
              <span className="text-gradient-neon">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all"
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-50">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient-neon transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs glass rounded-full text-gray-300 group-hover:bg-white/20 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity blur-2xl`}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ width: '50%' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

