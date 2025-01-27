import React from "react";
import Projects from "./Projects";
import "./project.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">
        Proud Achievements I've Accomplished Along the Way
      </span>

      <Projects />
    </section>
  );
};

export default Portfolio;
