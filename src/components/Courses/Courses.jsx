import React from 'react';
import './Courses.css';
import courses1 from '../../assets/courses1.jpg'
import fileIcon from '../../assets/file-icon.png'
import profile from '../../assets/profile.jpg'
import courses2 from '../../assets/courses2.jpg'

const Courses = () => {
    const cardData = [
        {
          imageSrc: courses1,
          overlayTexts: ['Software', '$ 79.00 USD'],
          title: 'Native Mac Apps in Swift',
          subtitle: 'Take your dev skills to the next level with this ground-up tutorial on Native Mac apps',
          button1: {
            imageSrc: profile,
            text: 'by Annabelle Portar'
          },
          button2: {
            imageSrc: fileIcon,
            text: '3 Lessons'
          }
        },
        {
          imageSrc: courses2,
          overlayTexts: ['Art & Design', 'Free'],
          title: 'Fundamentals of Interior Design',
          subtitle: 'A beginners guide to interior desigining that pop',
          button1: {
            imageSrc: profile,
            text: 'by Annabelle Portar'
          },
          button2: {
            imageSrc: fileIcon,
            text: '3 Lessons'
          }
        }
      ];

  return (
    <div className="Courses container">
      <div className="header">
        <span className="header-text">New Courses</span>
        <button className="btn">Explore Courses</button>
      </div>
      <div className="cards">
        {cardData.map((data, index)=> (
            <Card
            key={index}
            imageSrc={data.imageSrc}
            overlayTexts={data.overlayTexts}
            title={data.title}
            subtitle={data.subtitle}
            button1={data.button1}
            button2={data.button2}
          />
        ))}
      </div>
    </div>
  );
};

    const Card = ({ imageSrc, overlayTexts, title, subtitle, button1, button2 }) => {
        return (
        <div className="card">
            <div className="image-container">
            <img src={imageSrc} alt="Card" className="card-image" />
            <div className="text-overlay">
                <span className="overlay-text-first">{overlayTexts[0]}</span>
                <span className="overlay-text-second">{overlayTexts[1]}</span>
            </div> 
            </div>
            <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{subtitle}</p>
            <div className="button-group">
                <button className="button-like">
                <img src={button1.imageSrc} alt="Name" className="button-image" />
                <span className="button-text">{button1.text}</span>
                </button>
                <button className="button-like">
                <img src={button2.imageSrc} alt="File" className="button-image-no-radius" />
                <span className="button-text">{button2.text}</span>
                </button>
            </div>
            </div>
        </div>
        );
  };

export default Courses;
