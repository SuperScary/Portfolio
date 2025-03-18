import React from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../Context/ThemeContext';
import '../Styles/Footer.css';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://github.com/SuperScary" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://x.com/supscary" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaXTwitter className="social-icon" />
            <span>X (Twitter)</span>
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} SuperScary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
