import React, { useState } from "react";
import "./qualification.css";

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
                  modalState === "ai_apprentice"
                    ? "qualification__modal active-modal"
                    : "qualification__modal"
                }>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModal(null)}
                    className="uil uil-x qualification__modal-close"></i>
                  <h3 className="qualification__modal-title">
                    AI & Software Engineer Apprentice
                  </h3>
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
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Business Analytics Undergraduate
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
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
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
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School Diploma</h3>
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
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  AI Software Engineer Intern
                </h3>
                <span className="qualification__subtitle">
                  Wholly Greens Pte. Ltd.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2024 - Jun 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
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
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Data Analytics Intern</h3>
                <span className="qualification__subtitle">Continental AG</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2024 - Jun 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
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
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">
                  National University of Singapore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  Jan 2023 - Dec 2023
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
