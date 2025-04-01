import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const projects = [
  {
    title: "Movie Recommendation System",
    description:
      "A cutting-edge movie recommendation engine harnessing machine learning techniques to analyze preference data from over 5,000 users in real time while ensuring security through authentication processes.",
    tags: ["MongoDB", "Express", "React", "JavaScript", "HTML/CSS"],
    github: "#",
    liveDemo: "#",
    image: "/images/movie-recommendation.png",
  },
  {
    title: "Stock Management System",
    description:
      "Engineered a Stock Management System that streamlined inventory tracking, featuring user role management and an intuitive responsive interface, improving efficiency by reducing item retrieval time by 30%.",
    tags: ["Java", "JSP", "Servlets", "JBoss", "MySQL", "JDBC", "HTML/CSS", "JavaScript"],
    github: "#",
    liveDemo: "#",
    image: "/images/stock-management.jpg",
  },
  {
    title: "Event Management System",
    description:
      "Developed a mobile event management application featuring user authentication and real-time updates, resulting in an increase of 1,000 active users within the first month after launch.",
    tags: ["React Native", "Python", "Django", "JavaScript", "HTML/CSS"],
    github: "#",
    liveDemo: "#",
    image: "/images/event-management.jpg",
  },
  {
    title: "Feature Extraction from Images",
    description:
      "Architected an advanced feature extraction algorithm leveraging TensorFlow and Python on a dataset of more than 100,000 images; this initiative enhanced model accuracy by achieving notable performance improvements.",
    tags: ["TensorFlow", "Python", "Feature Engineering", "AI", "Image Processing", "Computer Vision"],
    github: "#",
    liveDemo: "#",
    image: "/images/feature-extraction.jpg",
  },
  {
    title: "AgriValue: Empowering Rural Entrepreneurship through Agriculture",
    description:
      "Developed a full-stack application supporting farmers, enhancing value-added products, and promoting rural entrepreneurship; facilitated improved agricultural practices that increased profitability for over 200 local farms.",
    tags: ["Spring Boot", "Java", "Hibernate", "MySQL", "HTML/CSS", "JavaScript"],
    github: "#",
    liveDemo: "#",
    image: "/images/agrivalue.jpg",
  },
  {
    title: "Dynamic Pricing Optimization for Retail with Cloud AI",
    description:
      "Designed an AI-powered pricing optimization system leveraging cloud computing to dynamically adjust product prices based on demand, competitor pricing, and historical sales data, increasing revenue by 15%.",
    tags: ["Cloud AI", "Machine Learning", "Python", "Big Data", "Retail Analytics"],
    github: "#",
    liveDemo: "#",
    image: "/images/dynamic-pricing.png",
  },
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="py-16 px-6 sm:px-8 lg:px-10 bg-gray-900 text-white">
      <div className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Explore my journey through projects. Each project represents a
          milestone in my continuous learning path.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
