import React from 'react';
import './Contact.css';
import phoneIcon from '../assets/phone-icon.png';
import emailIcon from '../assets/email-icon.png';
import linkendin from '../assets/linkendin.png';

const Contact = () => {
  const contactDetails = [
    {
      text: 'Phone: +234 705 298 7755',
      icon: phoneIcon,
      link: 'tel:+2347052987755',
    },
    {
      text: 'Email: raphaeloyelami1@gmail.com ',
      icon: emailIcon,
      link: 'mailto:raphaeloyelami1@gmail.com ',
    },
    {
      text: 'LinkedIn: https://www.linkedin.com/in/raphael-oyelami/',
      icon: linkendin,
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
            <img src={detail.icon} alt="" className="contact-icon" />
            <a href={detail.link}>{detail.text}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
