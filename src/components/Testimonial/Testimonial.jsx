import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Testimonial.css';
import student from '../../assets/student.png'
import quote from '../../assets/quote.png'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Fetch the testimonials from the API
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://viaje.ai/testimonial_api/');
        setTestimonials(response.data.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    // Auto-scroll functionality every 5 seconds
    if (testimonials.length > 0) {
      setTimer(setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000));
    }

    return () => clearInterval(timer);
  }, [testimonials]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(timer); // Clear timer if user clicks a dot
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
  
    // Add half star if needed
    if (halfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
  
    // Add empty stars if needed
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  
    return stars;
  };
  

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Student Says</h2>

      <div className="testimonial-content">
        <div className="testimonial-left">
          <img src={student} alt="Student" className="student-image" />
        </div>

        <div className="testimonial-right">
          <img src={quote} alt="Quote" className="quote-image" />
          <p className="testimonial-comment">"{testimonials[currentIndex]?.comment}"</p>
          <div className="testimonial-stars">
            {renderStars(testimonials[currentIndex]?.rating)}
          </div>
          <p className="testimonial-name">{testimonials[currentIndex]?.comment_by}</p>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
