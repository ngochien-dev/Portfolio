import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPostman, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiMysql, SiMongodb, SiSqlite,
  SiGit, SiGithub, SiSpringboot,
  SiTrello, SiGooglechrome
} from 'react-icons/si';
import { FiCheckCircle, FiSearch, FiAlertCircle, FiRepeat, FiClipboard, FiLayers, FiTool, FiCloud } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Testing Core',
    icon: '🔍',
    color: 'purple',
    skills: [
      { name: 'Test Case Design', icon: <FiClipboard /> },
      { name: 'Functional Testing', icon: <FiCheckCircle /> },
      { name: 'Regression Testing', icon: <FiRepeat /> },
      { name: 'Bug Reporting', icon: <FiAlertCircle /> },
      { name: 'STLC', icon: <FiLayers /> },
      { name: 'Bug Life Cycle', icon: <FiSearch /> },
    ],
  },
  {
    title: 'Automation & Tools',
    icon: '⚙️',
    color: 'cyan',
    skills: [
      { name: 'Playwright', icon: <FiTool /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Chrome DevTools', icon: <SiGooglechrome /> },
      { name: 'Trello', icon: <SiTrello /> },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'pink',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'emerald',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQLite', icon: <SiSqlite /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'amber',
    skills: [
      { name: 'AWS', icon: <FiCloud /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Agile/Scrum', icon: <FiRepeat /> },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to ensure software quality and build reliable systems
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`skills__category glass-card skills__category--${cat.color}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="skills__category-header">
                <span className="skills__category-emoji">{cat.icon}</span>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>
              <div className="skills__list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={`skills__item skills__item--${cat.color}`}>
                    <span className="skills__item-icon">{skill.icon}</span>
                    <span className="skills__item-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
