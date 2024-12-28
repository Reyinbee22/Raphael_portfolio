import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import './style.css';  

const Projects = () => {
  const projects = [
    { 
      title: 'Project 1', 
      description: 'Analysis of movie rentals to determine popular genres and trends.', 
      tools: ['Python', 'SQL'], 
      link: 'https://github.com/raphaeloyelami/movie_rentals_analysis', 
      image: project1
    },
    { 
      title: 'Project 2', 
      description: 'Insurance data analysis and visualization for risk assessment.', 
      tools: ['Tableau', 'Excel'], 
      link: 'https://github.com/raphaeloyelami/sql_insurance_analysis', 
      image: project2
    },
    { 
      title: 'Project 3', 
      description: 'Credit card processing data analysis and insights.', 
      tools: ['Tableau', 'Excel'], 
      link: 'https://github.com/raphaeloyelami/sql_analysis_credit_card_processing', 
      image: project3
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tools">Tools: {project.tools.join(', ')}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
