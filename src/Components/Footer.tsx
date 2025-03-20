import React from 'react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../Context/ThemeContext';
import { NavBarLinks } from './NavLinks';
import '../Styles/Footer.css';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-ghost">
            <img src="/logo.svg" alt="logo" className="theme-logo" />
          </div>
          <div className="footer-sections">
            {NavBarLinks
              .filter(section => section.showInFooter !== false)
              .map((section, index) => (
                <div key={index} className="footer-section">
                  <div className="section-heading">{section.label}</div>
                  <ul>
                    {section.children ? (
                      section.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a href={`/${child.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            {child.title}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>
                        <a href={section.path}>{section.label}</a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
          </div>
        </div>
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
