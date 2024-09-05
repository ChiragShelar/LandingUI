import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">How Does Educate Work?</h1>
      <div className="roadmap">
        {/* Stage 1 */}
        <div className="stage">
          <div className="stage-number">1</div>
          <div className="stage-description">Browse coruse from our expert contributors</div>
        </div>

        {/* Arc between Stage 1 and Stage 2 */}
        <svg className="connector-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
          <path className="connector-arc" d="M 20 50 Q 100 0 180 50" stroke="#4B0082" strokeWidth="3" fill="none" />
        </svg>

        {/* Stage 2 */}
        <div className="stage">
          <div className="stage-number">2</div>
          <div className="stage-description">Purchase quickly and securely</div>
        </div>

        {/* Arc between Stage 2 and Stage 3 */}
        <svg className="connector-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
          <path className="connector-arc" d="M 20 50 Q 100 100 180 50" stroke="#4B0082" strokeWidth="3" fill="none" />
        </svg>

        {/* Stage 3 */}
        <div className="stage">
          <div className="stage-number">3</div>
          <div className="stage-description">That's Start learning right away</div>
        </div>
      </div>

      <div className='roadmap-text'>
        Join Over 1,000 Satisfied learners today.
      </div>

      <div className="roadmap-button-container">
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Roadmap;
