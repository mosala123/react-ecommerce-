import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <h5>📍 About Us</h5>
            <p>Your trusted online store for premium quality products at the best prices</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>🔗 Quick Links</h5>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/product">Products</a>
              <a href="/cart">Cart</a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>📞 Contact Us</h5>
            <p>Email: info@shophub.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <hr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        <p className="mb-0">&copy; 2024 Shop Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
