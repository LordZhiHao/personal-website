import React, { useState } from "react";
import "./qualification.css";
import QualificationItem from "./QualificationItem";
import { educationData } from "./data/educationData";
import { experienceData } from "./data/experienceData";

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
          {/* Education Tab */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            {educationData.map((item) => (
              <QualificationItem
                key={item.id}
                item={item}
                modalState={modalState}
                toggleModal={toggleModal}
              />
            ))}
          </div>

          {/* Experience Tab */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            {experienceData.map((item) => (
              <QualificationItem
                key={item.id}
                item={item}
                modalState={modalState}
                toggleModal={toggleModal}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
