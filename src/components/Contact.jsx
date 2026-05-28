import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'ngochien.140604@gmail.com',
    href: 'mailto:ngochien.140604@gmail.com',
    color: 'purple',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '0777 495 997',
    href: 'tel:+84777495997',
    color: 'cyan',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Ho Chi Minh City, Vietnam',
    href: null,
    color: 'pink',
  },
];

const socials = [
  {
    icon: <FiGithub />,
    label: 'GitHub',
    href: 'https://github.com/ngochien-dev',
    username: '@ngochien-dev',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ngochien140604',
    username: 'ngochien140604',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="glow-orb glow-orb--cyan" style={{ width: 350, height: 350, bottom: '10%', left: '-5%' }} />
      <div className="glow-orb glow-orb--purple" style={{ width: 300, height: 300, top: '10%', right: '-5%' }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            I'm currently looking for QA internship opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="contact__info-cards">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href || '#'}
                  className={`contact__info-card glass-card contact__info-card--${item.color}`}
                  {...(!item.href ? { onClick: (e) => e.preventDefault(), style: { cursor: 'default' } } : {})}
                >
                  <div className={`contact__info-icon contact__info-icon--${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__socials">
              <h4 className="contact__socials-title">Find me on</h4>
              <div className="contact__socials-list">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-card glass-card"
                  >
                    <span className="contact__social-icon">{s.icon}</span>
                    <div>
                      <span className="contact__social-platform">{s.label}</span>
                      <span className="contact__social-username">{s.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="contact__form-title">Send a Message</h3>
            <form
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const subject = encodeURIComponent(`Portfolio Contact: ${data.get('subject')}`);
                const body = encodeURIComponent(`Hi Hien,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`);
                window.open(`mailto:ngochien.140604@gmail.com?subject=${subject}&body=${body}`);
              }}
            >
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your name" required />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input type="text" id="contact-subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Your message..." required />
              </div>
              <button type="submit" className="contact__submit-btn">
                <FiSend />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
