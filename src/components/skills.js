import React from 'react';
import './Skills.css';
import excel from '../assets/excel.jpeg';
import airflow from '../assets/airflow.jpeg';
import aws from '../assets/aws.png';
import docker from '../assets/docker.png';
import kafka from '../assets/kafka.png';
import sql from '../assets/SQL.jpeg';
import powerbi from '../assets/powerbi.png';
import python from '../assets/python.jpeg';
import spark from '../assets/spark.png';
import tableau from '../assets/tableau.png';
import visualization from '../assets/visualization.png';

const Skills = () => {
  const skills = [
    { name: 'Excel', icon: excel },
    { name: 'SQL', icon: sql },
    { name: 'Python', icon: python },
    { name: 'Tableau', icon: tableau },
    { name: 'Apache Spark', icon: spark },
    { name: 'Kafka', icon: kafka },
    { name: 'Airflow', icon: airflow },
    { name: 'Docker', icon: docker },
    { name: 'AWS', icon: aws },
    { name: 'Data Visualization', icon: visualization },
    { name: 'Power BI', icon: powerbi },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
