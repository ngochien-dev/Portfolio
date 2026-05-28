import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiUsers, FiCalendar } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Playwright E2E Automation',
    type: 'Personal Project',
    period: 'May 2026 - Present',
    description:
      'Comprehensive end-to-end automation testing framework with 60+ test scenarios covering UI, REST APIs, and database integrity. Features advanced visual regression, data-driven testing, and RBAC validation across multiple browser engines.',
    techStack: ['Playwright', 'TypeScript', 'SQLite', 'GitHub Actions', 'Allure Report'],
    highlights: [
      'Designed 60+ comprehensive manual test scenarios for UI, API & DB',
      'Implemented Data-Driven Testing (DDT) for complex edge cases',
      'Validated RBAC & Activity Log across Chromium & Firefox',
      'Built advanced visual regression automation pipeline',
    ],
    gradient: 'purple',
    icon: '🎭',
  },
  {
    title: 'HienStore',
    type: 'Personal Project',
    period: 'Mar 2026 - Present',
    description:
      'Full-featured e-commerce platform with Flash Sales, Loyalty Program, and AI Shopping Assistant. Rigorous QA process including UI/UX, API, integration, and performance testing.',
    techStack: ['Spring Boot', 'React.js', 'TypeScript', 'MySQL', 'WebSocket', 'Spring AI', 'Tailwind CSS'],
    highlights: [
      'Authored test cases for Flash Sales, Loyalty & AI Shopping modules',
      'API Testing with Postman for JWT auth & Redis caching',
      'Integration testing for VNPay, Cloudinary & WebSockets',
      'Verified sub-100ms latency for real-time features under load',
    ],
    gradient: 'cyan',
    icon: '🛒',
  },
  {
    title: 'Real-time OTT Messaging App',
    type: 'Team Project (4 members)',
    period: 'Feb 2026 - Present',
    description:
      'Real-time messaging application with Socket.IO, OTP verification, and AI integration. Served as both Full-stack Developer & QA, ensuring zero injection vulnerabilities.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'AWS DynamoDB', 'Socket.IO', 'JWT', 'Google Gemini AI'],
    highlights: [
      'Validated Socket.IO across 50+ concurrent users',
      'Designed edge-case tests for Email OTP & XSS protection',
      'Verified AWS DynamoDB data integrity & backend logic',
      'Achieved 100% sprint goal completion, 1 week ahead of schedule',
    ],
    gradient: 'pink',
    icon: '💬',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="glow-orb glow-orb--purple" style={{ width: 400, height: 400, top: '20%', right: '-10%' }} />
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Projects where I applied my QA expertise to ensure quality and reliability
          </p>
        </motion.div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`projects__card glass-card projects__card--${project.gradient}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <div className="projects__card-header">
                <span className="projects__card-icon">{project.icon}</span>
                <div className="projects__card-meta">
                  <div className="projects__card-type">
                    <FiUsers size={14} />
                    {project.type}
                  </div>
                  <div className="projects__card-period">
                    <FiCalendar size={14} />
                    {project.period}
                  </div>
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-highlights">
                <h4 className="projects__card-highlights-label">Key Achievements</h4>
                <ul>
                  {project.highlights.map((h) => (
                    <li key={h}>
                      <span className={`projects__check projects__check--${project.gradient}`}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="projects__card-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className={`projects__tech-tag projects__tech-tag--${project.gradient}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
