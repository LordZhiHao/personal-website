import React, { useState } from "react";
import "./qualification.css";
import NUSLogo from "../../assets/NUS-logo.png";
import Gamuda from "../../assets/gamuda.png";
import UCLLogo from "../../assets/ucl.png";
import ChungLing from "../../assets/chungling.png";

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
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

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
                      AI & Software Engineer Apprentice
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Details about the apprenticeship program at Gamuda AI
                    Academy
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed AI solutions for real-world problems
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
                    BSc in Business Analytics
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  National University of Singapore (NUS)
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Academics: Second Major in Economics & Specialized in
                      Machine Learning-based Analytics
                    </p>
                  </li>
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Awards: Certificate of Distinction in Analytics Techniques
                      Knowledge Area, Financial Analytics Specialisation &
                      Machine Learning Analytics Specialisation, ASEAN
                      Undergraduate Scholarships
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
                      Data Analysis & Big Data Analytics
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Details about the apprenticeship program at Gamuda AI
                    Academy
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed AI solutions for real-world problems
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
                    Business Analytics Undergraduate
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  Details about the apprenticeship program at Gamuda AI Academy
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Developed AI solutions for real-world problems
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
                onClick={() => toggleModal("ai_apprentice")}
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
                  modalState === "ai_apprentice"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src="/path-to-your-logo.png" // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Data Analysis & Big Data Analytics
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Details about the apprenticeship program at Gamuda AI
                    Academy
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed AI solutions for real-world problems
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
                    Business Analytics Undergraduate
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  Details about the apprenticeship program at Gamuda AI Academy
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Developed AI solutions for real-world problems
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
                onClick={() => toggleModal("ai_apprentice")}
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
                  modalState === "ai_apprentice"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src="/path-to-your-logo.png" // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Data Analysis & Big Data Analytics
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Details about the apprenticeship program at Gamuda AI
                    Academy
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed AI solutions for real-world problems
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
                onClick={() => toggleModal("business_analytics")}
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
                modalState === "business_analytics"
                  ? "qualification__modal active-modal"
                  : "qualification__modal"
              }>
              <div className="qualification__modal-content">
                <i
                  onClick={() => toggleModal(null)}
                  className="uil uil-x qualification__modal-close"></i>

                <div className="modal__header">
                  <img
                    src="/path-to-your-logo.png" // Replace with your logo path
                    alt="Gamuda AI Academy Logo"
                    className="company__logo"
                  />
                  <h3 className="qualification__modal-title">
                    Business Analytics Undergraduate
                  </h3>
                </div>

                <p className="qualification__modal-description">
                  Details about the apprenticeship program at Gamuda AI Academy
                </p>
                <ul className="qualification__modal-details grid">
                  <li className="qualification__modal-detail">
                    <i className="uil uil-check-circle qualification__modal-icon"></i>
                    <p className="qualification__modal-info">
                      Developed AI solutions for real-world problems
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
                onClick={() => toggleModal("ai_apprentice")}
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
                  modalState === "ai_apprentice"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>

                  <div className="modal__header">
                    <img
                      src="/path-to-your-logo.png" // Replace with your logo path
                      alt="Gamuda AI Academy Logo"
                      className="company__logo"
                    />
                    <h3 className="qualification__modal-title">
                      Data Analysis & Big Data Analytics
                    </h3>
                  </div>

                  <p className="qualification__modal-description">
                    Details about the apprenticeship program at Gamuda AI
                    Academy
                  </p>
                  <ul className="qualification__modal-details grid">
                    <li className="qualification__modal-detail">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed AI solutions for real-world problems
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
