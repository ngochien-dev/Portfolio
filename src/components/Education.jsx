import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiStar } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <motion.div
          className="education__card glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="education__card-top">
            <div className="education__info">
              <div className="education__icon-wrapper">
                <FiBookOpen size={28} />
              </div>
              <div>
                <h3 className="education__degree">Software Engineering</h3>
                <p className="education__school">Industrial University of Ho Chi Minh City (IUH)</p>
                <p className="education__period">Oct 2022 - Present</p>
              </div>
            </div>
            <div className="education__gpa">
              <span className="education__gpa-label">GPA</span>
              <span className="education__gpa-value">3.06</span>
              <span className="education__gpa-scale">/ 4.0</span>
            </div>
          </div>

          <div className="education__divider" />

          <div className="education__details">
            <div className="education__detail-item">
              <div className="education__detail-icon education__detail-icon--amber">
                <FiAward size={18} />
              </div>
              <div>
                <h4 className="education__detail-title">Honors & Awards</h4>
                <div className="education__honor">
                  <FiStar className="education__honor-star" />
                  <p>
                    Received <strong>70% Academic Excellence Scholarship</strong>
                    <br />
                    <span className="education__honor-period">Semester 2, Academic Year 2022 - 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
