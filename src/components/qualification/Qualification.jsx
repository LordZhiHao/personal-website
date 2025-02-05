import React, { useState } from "react";
import "./qualification.css";
import NUSLogo from "../../assets/NUS-logo.png";
import Gamuda from "../../assets/gamuda.png";
import UCLLogo from "../../assets/ucl.png";
import ChungLing from "../../assets/chungling.png";
import whollyGreen from "../../assets/whollyGreen.png";
import azureTide from "../../assets/azt.png";
import continental from "../../assets/continental.png";
import jtc from "../../assets/jtc.png";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [modalState, setModalState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleModal = (modalId) => {
    setModalState(modalId === modalState ? null : modalId);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Education & Experience</h2>
      <span className="section__subtitle">My Unique Experience & Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}>
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}>
            <i className="uil uil-suitcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            {/* a qualification_data component - right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div
                onClick={() => toggleModal("gamuda")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">
                  AI & Software Engineer Apprentice
                </h3>
                <span className="qualification__subtitle">
                  Gamuda AI Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2025 - Mar 2025
                </div>
              </div>

              {/* Modal */}
              <div
                className={
                  modalState === "gamuda"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src={Gamuda} // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Gamuda AI Academy
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    <strong>AI & Software Engineer Apprentice</strong>
                  </p>
                  <p className="qualification__modal-description">
                    Selected as a student in Cohort 2 for specialised training
                    and development in Artificial Intelligence (AI) & Machine
                    Learning
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed <strong>Bon AI-Petit</strong>, a LLM
                        integrated web application using{" "}
                        <strong>Vue.js and Vuetify</strong> for the frontend,
                        and{" "}
                        <strong>
                          FastAPI, Google Cloud Services, PostgreSQL, and
                          MongoDB
                        </strong>{" "}
                        for the backend.
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Utilized{" "}
                        <strong>Vertex AI, MongoDB, and Gemini Pro</strong> to
                        implement a{" "}
                        <strong>RAG (Retrieval-Augmented Generation)</strong>{" "}
                        architecture for accurate and personalized recipe
                        recommendations.
                      </p>
                    </li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              </div>
            </div>

            {/* a qualification_data component - left*/}
            <div className="qualification__data">
              <div
                onClick={() => toggleModal("nus_bza")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">
                  BSc in Business Analytics
                </h3>
                <span className="qualification__subtitle">
                  National University of Singapore (NUS)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Aug 2021 - Dec 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Modal */}
            <div
              className={
                modalState === "nus_bza"
                  ? "qualification__modal active-modal"
                  : "qualification__modal"
              }>
              <div className="qualification__modal-content">
                <i
                  onClick={() => toggleModal(null)}
                  className="uil uil-x qualification__modal-close"></i>

                <div className="modal__header">
                  <img
                    src={NUSLogo} // Replace with your logo path
                    alt="Gamuda AI Academy Logo"
                    className="company__logo"
                  />
                  <h3 className="qualification__modal-title">
                    National University of Singapore (NUS)
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  BSc. in Business Analytics & Second Major in Economics
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      <strong>Academics:</strong> Second Major in Economics &
                      Specialized in Machine Learning-based Analytics
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      <strong>Awards:</strong> Certificate of Distinction in
                      Analytics Techniques Knowledge Area, Financial Analytics
                      Specialisation & Machine Learning Analytics
                      Specialisation, ASEAN Undergraduate Scholarships
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">CAP: 4.33/5.0</p>
                  </li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>

            {/* a qualification_data component - right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div
                onClick={() => toggleModal("ucl")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">
                  Data Analysis & Big Data Analytics
                </h3>
                <span className="qualification__subtitle">
                  University College London (UCL)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  May 2024 - Aug 2024
                </div>
              </div>

              {/* Modal */}
              <div
                className={
                  modalState === "ucl"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src={UCLLogo} // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      University College London (UCL)
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Enrolled as Summer School student at UCL, taking up courses
                    in Big Data Analytics and Data-Driven Application
                    Development
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Identified project requirements, developed
                        Entity-Relational Diagrams, and implemented
                        normalisation to come up with a final database system
                        for a film agency to store data accurately and securely
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Performed exploratory data analysis (EDA), regression
                        analysis and modelling on London Residential Real Estate
                        data, accomplishing a final R-squared value of 83% and
                        identifying actionable insights for the market.
                      </p>
                    </li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              </div>
            </div>

            {/* a qualification_data component - left*/}
            <div className="qualification__data">
              <div
                onClick={() => toggleModal("chungling")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">
                  High School Diploma (UEC)
                </h3>
                <span className="qualification__subtitle">
                  Chung Ling Private High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2015 - Dec 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                modalState === "chungling"
                  ? "qualification__modal active-modal"
                  : "qualification__modal"
              }>
              <div className="qualification__modal-content">
                <i
                  onClick={() => toggleModal(null)}
                  className="uil uil-x qualification__modal-close"></i>

                <div className="modal__header">
                  <img
                    src={ChungLing} // Replace with your logo path
                    alt="Gamuda AI Academy Logo"
                    className="company__logo"
                  />
                  <h3 className="qualification__modal-title">
                    Chung Ling Private High School
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  High School Diploma (UEC)
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      <strong>UEC 7A1, 1A2</strong> - A1 (Advanced Mathematics
                      II, Chemistry, Biology, Physics, Chinese, English, Malay),
                      A2 (Advanced Mathematics I)
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      <strong>SPM 9As, 1B+</strong> - A (Chinese, English,
                      Malay, Physics, Biology, History, Math, Additional Math,
                      Ethics), B+ (Chemistry)
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Elected President of St. John Ambulance in 2019, hosted
                      and facilitated weekly and special event with regards to
                      first-aide and teamwork for 50+ club members during the
                      period
                    </p>
                  </li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            {/* a qualification_data component - right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div
                onClick={() => toggleModal("wholly_green")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">Data Scientist Intern</h3>
                <span className="qualification__subtitle">
                  Wholly Greens Pte. Ltd.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2025 - May 2025
                </div>
              </div>

              {/* Modal */}
              <div
                className={
                  modalState === "wholly_green"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src={whollyGreen} // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Wholly Greens Pte. Ltd.
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    <strong>Data Scientist Intern</strong>
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed object identification and classification model
                        using YOLO model and CVAT platform, creating a robust
                        data pipeline to accurately identify objects retrieved
                        by users from vending machines.
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Conducted time series analysis to perform demand
                        forecasting for over 40 SKUs across 400+ vending machine
                        locations, reducing waste and improving profit margins.
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Delivered PowerBI dashboard to visualize forecasted
                        demand for each vending machine and SKU, enabling
                        accurate daily restocking decisions and optimizing
                        inventory management.
                      </p>
                    </li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              </div>
            </div>

            {/* a qualification_data component - left*/}
            <div className="qualification__data">
              <div
                onClick={() => toggleModal("azure_tide")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">Data Analyst Intern</h3>
                <span className="qualification__subtitle">
                  Azure Tide Holdings Pte. Ltd.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Aug 2024 - Jan 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                modalState === "azure_tide"
                  ? "qualification__modal active-modal"
                  : "qualification__modal"
              }>
              <div className="qualification__modal-content">
                <i
                  onClick={() => toggleModal(null)}
                  className="uil uil-x qualification__modal-close"></i>

                <div className="modal__header">
                  <img
                    src={azureTide} // Replace with your logo path
                    alt="Gamuda AI Academy Logo"
                    className="company__logo"
                  />
                  <h3 className="qualification__modal-title">
                    Azure Tide Holdings Pte. Ltd.
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  <strong>Data Analyst Intern</strong>
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Utilized Python to integrate with 5+ APIs (CoinMarketCap,
                      CoinGecko, Debank, Binance, Blockchain.com) to collect and
                      process data for over 20+ cryptocurrencies and wallets
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Automated daily updates of cryptocurrency prices and
                      conducted due diligence on counterparties' financial
                      situations, reducing manual workload by 90\% per day and
                      improving data accuracy
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Streamlined the distribution of financial and market
                      updates to 10+ stakeholders via Sheety, Slack, and
                      Telegram APIs, reducing the update time by 80\% and
                      ensuring real-time communication
                    </p>
                  </li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            {/* a qualification_data component - right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div
                onClick={() => toggleModal("continental")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">Data Analytics Intern</h3>
                <span className="qualification__subtitle">Continental AG</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2024 - Jun 2024
                </div>
              </div>

              {/* Modal */}
              <div
                className={
                  modalState === "continental"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src={continental} // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Continental AG
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    <strong>Data Analytics Intern</strong>
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Designed and implemented a PowerBI dashboard to compare
                        and filter similar projects, aiding project managers in
                        identifying past project details and costs
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Proposed and executed a redesign of the data
                        relationships between 20+ tables in the project details
                        management dashboard, streamlining data flows and
                        improving efficiency
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Employed PowerQuery for data cleaning and manipulation,
                        and leveraged DAX measures to calculate key metrics
                        (mean, median, standard deviation) for real-time project
                        cost management
                      </p>
                    </li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              </div>
            </div>

            {/* a qualification_data component - left*/}
            <div className="qualification__data">
              <div
                onClick={() => toggleModal("jtc")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">Data Science Intern</h3>
                <span className="qualification__subtitle">
                  Jurong Town Corporation (JTC)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  May 2023 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                modalState === "jtc"
                  ? "qualification__modal active-modal"
                  : "qualification__modal"
              }>
              <div className="qualification__modal-content">
                <i
                  onClick={() => toggleModal(null)}
                  className="uil uil-x qualification__modal-close"></i>

                <div className="modal__header">
                  <img
                    src={jtc} // Replace with your logo path
                    alt="Gamuda AI Academy Logo"
                    className="company__logo"
                  />
                  <h3 className="qualification__modal-title">
                    Jurong Town Corporation (JTC)
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  <strong>Data Science Intern</strong>
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Conducted data cleansing, preprocessing, feature
                      engineering, and developed machine learning models to
                      accurately predict the occupancy rate of sub-segments
                      within the industrial property sector
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Improved Mean Absolute Error of model predictions to 0.21%
                      quarterly hence reducing the number of occupancy rate
                      surveys needed by the company from 4 to 2 times per year
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Identified and visualized key factors that significantly
                      contribute to higher premiums observed in both food and
                      generic industrial space
                    </p>
                  </li>
                  {/* Add more details as needed */}
                </ul>
              </div>
            </div>

            {/* a qualification_data component - right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div
                onClick={() => toggleModal("ta")}
                className="qualification__content-clickable">
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">
                  National University of Singapore (School of Computing)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2023 - Dec 2023
                </div>
              </div>

              {/* Modal */}
              <div
                className={
                  modalState === "ta"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src={NUSLogo} // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      National University of Singapore (School of Computing)
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    <strong>Teaching Assistant</strong>
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Facilitated a 25-student tutorial class to conduct
                        discussion and learning on computing ethics and data
                        privacy challenges in contemporary culture
                      </p>
                    </li>
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Collaborated with another Teaching Assistant to grade
                        and review assignments for course participants
                      </p>
                    </li>
                    {/* Add more details as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
