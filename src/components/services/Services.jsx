import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services I Offer</h2>
      <span className="section__subtitle">
        Analyse, Develop & Collaborate With Me!
      </span>

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
                Over 1 yeaer of experience in providing detailed insights and
                analysis for decision-making.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Delivering Real-Time Data Analytics & Visualization
                    Solutions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing Data Delivery & Reporting Pipeline
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing Statistical & Econometrics Analysis for Insights
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
                Over 1 year of experience in delivering data science solutions
                with a pecialization in Machine Learning and Analytics.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Training Machine Learning Models for Predictive Analytics
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing Computer Vision Solutions for Automated Pipelines
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Applying Time Series Forecasting for Demand/Supply
                    Forecasting
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
                Background in Computing Degree with multiple project experiences
                in Web Development.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Front-End Development with Vue.js & React.js Frameworks
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Schema Design and Implementation with MySQL & PostGreSQL
                  </p>
                </li>
                <li className="services__modal-service">
                  <i class="uil uil-lightbulb services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Application Development with Retriver Augmented
                    Generation AI Solutions Integration
                  </p>
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
