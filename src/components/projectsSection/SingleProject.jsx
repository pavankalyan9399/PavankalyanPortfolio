import React from "react";
import SingleProject from "./SingleProject";
const SingleProject = ({ project }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <img src={project.image} alt={project.name} className="project-image" loading="lazy" />

      {/* Project Title and Year */}
      <h3 className="project-title">{project.name}</h3>
      <p className="project-year">{project.year}</p>

      {/* Project Description */}
      <p className="project-description">{project.description}</p>

      {/* Tools Used */}
      <div className="project-tools">
        {project.tools.map((tool, index) => (
          <span key={index} className="tool-badge">
            {tool}
          </span>
        ))}
      </div>

      
    </div>
  );
};

export default SingleProject;
