import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <a href="#" className="project__button">
        Demo <i className="uil uil-info project__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;
