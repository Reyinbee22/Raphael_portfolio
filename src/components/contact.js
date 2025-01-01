import React from 'react';
import './Contact.css';
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkendin.png'; 

const Contact = () => {
  const contactDetails = [
    {
      // text: 'Email: raphaeloyelami1@gmail.com',
      icon: emailIcon,
      link: 'mailto:raphaeloyelami1@gmail.com',
    },
    {
      // text: 'LinkedIn: https://www.linkedin.com/in/raphael-oyelami/',
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/raphael-oyelami/',
    },
  ];

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">Feel free to reach out to me via any of the channels below:</p>
      <div className="contact-info">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-info-item">
            <a href={detail.link} target="_blank" rel="noopener noreferrer">
              <img src={detail.icon} alt={detail.text} className="contact-icon" />
            </a>
            <p>{detail.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
