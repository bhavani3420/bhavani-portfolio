import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFigma,
  SiTensorflow,
  SiExpress 
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

/* ===== Categorized Skills with Levels ===== */
const skills = {
  Languages: [
    { name: "JavaScript", level: 90, icon: SiJavascript },
    { name: "Java", level: 85, icon: FaJava },
    { name: "Python", level: 85, icon: SiPython },
  ],
  Frontend: [
    { name: "React", level: 90, icon: SiReact },
    { name: "HTML", level: 95, icon: SiHtml5 },
    { name: "CSS", level: 90, icon: SiCss3 },
    { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: SiNodedotjs },
  { name: "Express.js", level: 85, icon: SiExpress },

    { name: "MongoDB", level: 80, icon: SiMongodb },
    { name: "MySQL", level: 82, icon: SiMysql },
  ],
  Tools: [
    { name: "GitHub", level: 85, icon: SiGithub },
    { name: "VS Code", level: 90, icon: FaCode },
    { name: "Figma", level: 75, icon: SiFigma },
  ],
  "AI / ML": [
    { name: "Machine Learning", level: 70, icon: SiTensorflow },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* ===== Glow blobs ===== */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--neon-cyan)", opacity: 0.25 }}
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ backgroundColor: "var(--neon-purple)", opacity: 0.25 }}
        animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Grid background ===== */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)]
        dark:opacity-30
        light:bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_1px)]
        light:opacity-20
        bg-[size:26px_26px]"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold text-gradient-neon mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-cyan-400 dark:bg-cyan-400 light:bg-blue-600" />
          <p className="text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            A snapshot of my technical strengths across different domains.
          </p>
        </div>

        {/* ===== Skill Categories (2 per row) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-white light:text-gray-900 mb-8 text-center">
                {category}
              </h3>

              {/* Skill Bars */}
              <div className="space-y-6">
                {items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index}>
                      {/* Label */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className="text-lg text-cyan-400 light:text-blue-600" />
                          <span className="text-sm font-medium text-gray-300 light:text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 light:text-gray-600">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-3 rounded-full bg-white/10 light:bg-black/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
