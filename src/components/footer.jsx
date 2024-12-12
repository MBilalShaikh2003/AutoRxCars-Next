import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <span className="logo">Auto<span className="span">Rx</span></span>
      </div>
      <div className="footer-links">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-copy">
        <p>&copy; 2024 AutoRx. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
