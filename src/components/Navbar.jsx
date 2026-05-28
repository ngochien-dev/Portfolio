import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(l => document.getElementById(l.id));
      const current = sections.reduce((acc, section) => {
        if (!section) return acc;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) return section.id;
        return acc;
      }, '');
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar__inner container">
          <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="navbar__logo-icon">⬡</span>
            <span className="navbar__logo-text">NGH</span>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <ThemeToggle />
            <a
              href="https://s3.topcv.vn/data-cvs/topcv-cv-uploads/d10f986b088238e591b03f6037a3d26c.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=s3-tp-topcv%2F20260528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260528T174531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=0a87d8d9691fb0f9c0dd77707ce40239e2187fc03f6d6fda6e9e9dcc963c10e8"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume-btn"
            >
              Resume
            </a>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="navbar__mobile-link-num">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
