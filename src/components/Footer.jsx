import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo-icon">⬡</span>
            <span className="footer__logo-text">Nguyen Ngoc Hien</span>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/ngochien-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/ngochien140604" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:ngochien.140604@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <p className="footer__copy">
            Built with <FiHeart className="footer__heart" /> using React &bull; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
