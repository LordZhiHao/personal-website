import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <strong>Jason</strong> Lo
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/zhi-hao-lo"
            className="home_social-icon"
            target="_blank">
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/LordZhiHao"
            className="home_social-icon"
            target="_blank">
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://medium.com/@lozhihao"
            className="home_social-icon"
            target="_blank">
            <i class="uil uil-medium-m"></i>
          </a>

          <a
            href="https://linktr.ee/lozhihao"
            className="home_social-icon"
            target="_blank">
            <i class="uil uil-trees"></i>
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
