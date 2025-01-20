import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
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
              <div>
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
              <div>
                <h3 className="qualification__title">Tech Support</h3>
                <span className="qualification__subtitle">PC Outlet</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  2012-2015
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
                <h3 className="qualification__title">Junior Developer</h3>
                <span className="qualification__subtitle">Discord</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  2015-2016
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple Inc</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  2016-2022
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
                <h3 className="qualification__title">Senior Developer</h3>
                <span className="qualification__subtitle">
                  Freelance - Remote
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                  2019-Present
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
