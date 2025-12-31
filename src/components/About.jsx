import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import profileImg from "../assets/profile.jpeg";


/* ======================
   STATIC DATA
====================== */
const cards = [
  {
    icon: FiCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code following best practices.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FiLayers,
    title: "Modern Stack",
    description:
      "Working with cutting-edge technologies and frameworks to build amazing products.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FiZap,
    title: "Fast Delivery",
    description:
      "Delivering high-quality solutions quickly without compromising on excellence.",
    color: "from-yellow-500 to-orange-500",
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {/* ======================
              SECTION HEADER
          ====================== */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">About </span>
              <span className="text-gradient-neon">Me</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my journey, passion, and what drives me
            </p>
          </motion.div>

          {/* ======================
              MAIN CONTENT
          ====================== */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient-neon">
                  Who I Am
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  Full Stack Developer skilled in React, HTML, CSS, JavaScript,
                  and the MERN stack. Passionate about creating user-centric,
                  scalable applications with strong performance optimization
                  and modern design principles.
                </p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  Experienced in Agile methodologies, version control with Git,
                  and collaborative development. I bring ideas to life through
                  clean code and innovative solutions, always focusing on user
                  experience, scalability, and performance.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Highly interested in Artificial Intelligence and Machine
                  Learning, with hands-on knowledge of core Machine Learning
                  concepts and models. Actively learning and experimenting with
                  ML algorithms, data analysis, and real-world applications to
                  build intelligent, data-driven solutions. Active contributor
                  to open-source communities (GSSoC'25) and continuously
                  exploring new technologies to stay ahead in the tech
                  ecosystem.
                </p>
              </div>
            </motion.div>

            {/* Visual / Photo */}
            <motion.div variants={itemVariants} className="relative">
              <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />

                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <img
          src={profileImg}
          alt="Bhavani Saladi profile"
          className="w-full h-full rounded-full object-cover bg-gray-900"
        />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">        Full Stack Developer · AI/ML Enthusiast
</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ======================
              FEATURE CARDS
          ====================== */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:shadow-glow transition-all cursor-pointer group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className="w-full h-full text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
