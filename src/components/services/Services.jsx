import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Create + Collaborate</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-graph-bar services__icon"></i>
            <h3 className="services__title">
              Data
              <br />
              Analyst
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-x services__modal-close"></i>
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Over 3 years of experience in web development providing quality
                work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page and app development
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integrate creative colloboration
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Provide product mockups
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-credit-card-search services__icon"></i>
            <h3 className="services__title">
              Data
              <br />
              Scientist
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-x services__modal-close"></i>
              <h3 className="services__modal-title">Designer</h3>
              <p className="services__modal-description">
                Over 2 years of experience in UI/UX design providing quality
                work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Create a user friendly interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop with a minimal approach
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design with accessibility in mind
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-browser services__icon"></i>
            <h3 className="services__title">
              Web
              <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-x services__modal-close"></i>
              <h3 className="services__modal-title">Branding</h3>
              <p className="services__modal-description">
                Over 3 years experience in branding providing quality work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Company logo and branding
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom website and landing page
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">Design product mockups</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
