import React from "react";
import "./skills.css";
import DataAnalysis from "./DataAnalysis";
import DataScience from "./DataScience";
import WebDevelopment from "./WebDevelopment";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Level</span>
      <div className="skills__container container grid">
        <DataAnalysis />
        <DataScience />
        <WebDevelopment />
      </div>
    </section>
  );
};

export default Skills;
