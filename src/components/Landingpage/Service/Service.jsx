import React from 'react';
import './Service.css'; // Import your CSS file or define styles in your component file

const Service = () => {
  const data = [
    {
      title: 'web designer',
      content: 'We can proudly say that we are table toppers in web designing.',
      imageUrl: 'Android.png',
      exploreLink: '/web-designer',
    },
    {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'Android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'Android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'Android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'Android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'Android.png',
        exploreLink: '/web-designer',
      },
      
    // Add more data objects as needed
  ];

  return (
    <div className='wrapper'>
        <div class="h-bar"></div>

<div class="v-bar"></div>
<h2 className='main-heading'>SERVICES</h2>
<p className='small-heading'>THINGS WE ARE SERVING</p>
      <div className="container">
        
        {data.map((card, index) => (
          <div key={index} className="box" style={{ background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${card.imageUrl}') no-repeat center center ` }}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <a  href={card.exploreLink} className="explore-btn">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
