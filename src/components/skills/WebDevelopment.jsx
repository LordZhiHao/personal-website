import React from "react";

const DataScience = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Web Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">HTML, CSS, JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Vue.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="uil uil-arrow"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
