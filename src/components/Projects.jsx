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
      title: 'BreatheSafe – AQI Health Platform',
      description:
        'A full-stack MERN platform providing personalized health guidance using real-time Air Quality Index data. Integrated Gemini API for AI recommendations and Twilio SMS alerts when pollution levels exceed safe limits.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['MERN', 'MongoDB', 'React', 'Node.js', 'Gemini API', 'Twilio'],
      github: 'https://github.com/bhavani3420/Breathesafe_project',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'LinguaConnect – Language Learning Platform',
      description:
        'A real-time language exchange platform where users connect globally for chat and video calls. Implemented JWT authentication, friend requests, messaging, and Stream Video SDK for one-to-one communication.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stream SDK'],
      github: 'https://github.com/bhavani3420/LinguaConnect',
      live: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'BeatFlow – Music Streaming Web App',
      description:
        'A full-stack music streaming application allowing users to search and play songs using the YouTube API. Includes authentication, custom playlists, favorites management, and a responsive music player.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
      tags: ['Node.js', 'Express', 'MongoDB', 'YouTube API', 'ImageKit'],
      github: 'https://github.com/bhavani3420/BeatFlow-Music-Streaming-App',
      live: '#',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI Route Rationalization System (SIH)',
      description:
        'An AI-driven transport optimization system developed for Smart India Hackathon to reduce bus delays and prevent bus bunching using CNN-LSTM traffic prediction and Ant Colony Optimization.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764b7d?w=800',
      tags: ['Python', 'PyTorch', 'CLSTM', 'ACO', 'Google Maps API'],
      github: '#',
      live: '#',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Musentia – Emotion Based Music Recommender',
      description:
        'An AI system that detects facial emotions using a CNN model and recommends music accordingly. Built with MediaPipe for real-time emotion detection and a Streamlit interface.',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800',
      tags: ['Python', 'CNN', 'MediaPipe', 'Streamlit', 'AI'],
      github: '#',
      live: '#',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Conversational Intelligence Analyzer',
      description:
        'An NLP-based analytics system that extracts behavioral insights from WhatsApp chat exports using topic modeling, sentiment analysis, and interaction pattern visualization.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      tags: ['Python', 'NLP', 'LDA', 'Pandas', 'Data Analysis'],
      github: '#',
      live: '#',
      color: 'from-green-500 to-teal-500',
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
