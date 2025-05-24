import React from 'react';

const Footer = () => {
  const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'TOS', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'FAQs', href: '#' },
    { text: 'Jobs', href: '#' },
    { text: 'Gift Cards', href: '#' }
  ];

  return (
    <footer className="myracehorse-footer">

      <div className="footer-content">
        {/* Footer Links */}
        <ul className="footer-links">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="footer-link"
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <p className="footer-copyright">
          Copyright © 2025 <span className="copyright-highlight">MyRacehorse</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer