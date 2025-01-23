import React from "react";

const DataScience = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Science</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Time Series Forecasting</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Recommender System</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Computer Vision</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Retriever Augmented Generation</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Classification & Regression</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Sentiment Analysis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
