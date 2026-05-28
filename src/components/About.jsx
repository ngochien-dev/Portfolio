import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCode, FiAward, FiTarget } from 'react-icons/fi';
import './About.css';

const highlights = [
  {
    icon: <FiTarget />,
    title: 'QA Focused',
    desc: 'Passionate about finding bugs before users do',
    color: 'purple',
  },
  {
    icon: <FiCode />,
    title: '60+ Test Cases',
    desc: 'Comprehensive test scenarios covering UI, API & DB',
    color: 'cyan',
  },
  {
    icon: <FiBriefcase />,
    title: 'Full-Stack',
    desc: 'Dev background strengthens testing perspective',
    color: 'pink',
  },
  {
    icon: <FiAward />,
    title: 'Scholarship',
    desc: '70% Academic Excellence Scholarship recipient',
    color: 'emerald',
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// About Me</span>
          <h2 className="section-title">
            Crafting Quality, One <span className="gradient-text">Test</span> at a Time
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text-card glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__text-content">
              <p>
                I'm a <strong>Detail-oriented QA Engineer</strong> based in Ho Chi Minh City, 
                currently pursuing Software Engineering at the Industrial University of Ho Chi Minh City.
              </p>
              <p>
                My passion lies in <span className="gradient-text">Manual & Automation Testing</span> — 
                analyzing requirements, designing comprehensive test cases, and executing functional, UI/UX, 
                and API tests to ensure every release meets the highest quality standards.
              </p>
              <p>
                With a strong <strong>Software Engineering background</strong>, I bring a developer's 
                perspective to testing, enabling me to identify complex defects and collaborate effectively 
                with development teams for seamless software delivery.
              </p>
              <div className="about__terminal">
                <div className="about__terminal-header">
                  <span className="about__terminal-dot about__terminal-dot--red" />
                  <span className="about__terminal-dot about__terminal-dot--yellow" />
                  <span className="about__terminal-dot about__terminal-dot--green" />
                  <span className="about__terminal-title">hien@portfolio ~ %</span>
                </div>
                <div className="about__terminal-body">
                  <p><span className="about__terminal-prompt">$</span> cat motto.txt</p>
                  <p className="about__terminal-output">
                    "Quality is not an act, it is a habit." — Aristotle
                  </p>
                  <p><span className="about__terminal-prompt">$</span> echo $STATUS</p>
                  <p className="about__terminal-output about__terminal-output--green">
                    ✓ Ready to contribute & learn
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className={`about__highlight-card glass-card about__highlight-card--${item.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className={`about__highlight-icon about__highlight-icon--${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="about__highlight-title">{item.title}</h4>
                  <p className="about__highlight-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
