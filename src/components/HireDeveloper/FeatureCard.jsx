import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <div className='featureCard'>
      <div className='iconWrapper'>
        <img loading="lazy" src={iconSrc} alt="" className='icon' />
      </div>
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </div>
  );
};

export default FeatureCard;