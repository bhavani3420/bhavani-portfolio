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
      description:
        'A real-time AQI tracker with 24-hour forecasting, health recommendations, and Twilio-based SMS alerts. Applied MongoDB for user history and caching, achieving 25% faster load times.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['MERN', 'Machine Learning', 'MongoDB', 'React Context API'],
      github: 'https://github.com/bhavani3420/BreatheSafe_Project',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Multiple Disease Prediction Web App',
      description:
        'A machine learning–based web application that predicts multiple diseases based on user input. Built using trained ML models with a user-friendly interface for early health risk assessment.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      tags: ['Machine Learning', 'Python', 'Healthcare', 'Prediction System'],
      github:
        'https://github.com/bhavani3420/Multiple-Disease-Prediction-Webapp.git',
      live: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'E-Commerce UI',
      description:
        'A responsive e-commerce UI with modular components. Developed using HTML, CSS, and JavaScript with focus on user experience and modern design principles.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bhavani3420/Ecommerce',
      live: '#',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Expense Tracker',
      description:
        'A personal budgeting app with local storage integration. Enabled adding, editing, and deleting expenses with real-time updates and intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/bhavani3420/CodeAlpha_Expense_Tracker',
      live: '#',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Portfolio',
      description:
        'A modern React-based personal portfolio showcasing projects, skills, and certifications with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/bhavani3420/bhavani-portfolio.git',
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all"
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-50">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full"
                    >
                      <FiGithub className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full"
                    >
                      <FiExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs glass rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;
