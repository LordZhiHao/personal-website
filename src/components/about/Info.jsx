import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-suitcase about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years</span>
      </div>
      <div className="about__box">
        <i class="uil uil-archive about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>
      <div className="about__box">
        <i class="uil uil-envelope-question about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
