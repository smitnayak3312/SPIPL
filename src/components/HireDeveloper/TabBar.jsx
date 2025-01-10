import React, { useState } from 'react';
import './TabBar.css';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const mobileDev = [
    {img: 'flutter.png',label: 'Flutter'},
    {img: 'Android.png',label: 'Android'},
    {img: 'Appstore.png',label: 'IOS'},
    {img: 'Atom.png',label: 'React Native'},
  ];
  

  const websiteDev = [
    {img:'laravel.png',label:'Laravel'},
    {img: 'Html.png',label: 'HTML'},
    {img: 'Php.png',label: 'PHP'},
    {img: 'Atom.png',label: 'React'},
  ];

  const devOps = [
    {img:'aws.png',label:'AWS'},
    {img: 'azure.png',label: 'Azure'},
    {img: 'docker.png',label: 'Docker'},
    {img: 'kubernetes.png',label: 'Kubernetes'},
    // {img: 'googlecloud.png',label: 'Google cloud'},
  ];

  const designing = [
    {img:'figma.png',label:'Figma'},
    {img: 'adobe.png',label: 'Adobe'},
    {img: 'photoshop.png',label: 'Photoshop'},
  ];

  const cmsSystems = [
    {img:'wordpress.png',label:'Wordpress'},
    {img:'drupal.png',label:'Drupal'},
  ];


  return (
    <div className="tab-container">
      {/* Tab Navigation */}
      <div className="tab-bar">
        <button
          className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab1')}
        >
          Mobile Development
        </button>
        <button
          className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab2')}
        >
          Web Development
        </button>
        {/* <button
          className={`tab ${activeTab === 'Tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab3')}
        >
          Backend
        </button> */}
        <button
          className={`tab ${activeTab === 'Tab4' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab4')}
        >
          Devops
        </button>
        <button
          className={`tab ${activeTab === 'Tab5' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab5')}
        >
          Desiging
        </button>
        <button
          className={`tab ${activeTab === 'Tab6' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab6')}
        >
          CMS
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'Tab1' && <div className='.content-grid'>{mobileDev.map((item, index)=>(
         
                <div className='tab-content-item' key={index}>
                <img src={item.img}></img><h4 className='text'>{item.label}</h4>
            
            </div>
        ))}</div>}
        {activeTab === 'Tab2' && <div className='.content-grid'>{websiteDev.map((item, index)=>(
         
         <div className='tab-content-item' key={index}>
         <img src={item.img}></img><h4 className='text'>{item.label}</h4>
     
            </div>
        ))}</div>}
        
        {activeTab === 'Tab3' && <div>Content for Tab 3</div>}
        {activeTab === 'Tab4' && <div className='.content-grid'>{devOps.map((item, index)=>(
         
         <div className='tab-content-item' key={index}>
         <img src={item.img}></img><h4 className='text'>{item.label}</h4>
     
            </div>
        ))}</div>}
        {activeTab === 'Tab5' && <div className='.content-grid'>{designing.map((item, index)=>(
         
         <div className='tab-content-item' key={index}>
         <img src={item.img}></img><h4 className='text'>{item.label}</h4>
     
            </div>
        ))}</div>}
        {activeTab === 'Tab6' && <div className='.content-grid'>{cmsSystems.map((item, index)=>(
         
         <div className='tab-content-item' key={index}>
         <img src={item.img}></img><h4 className='text'>{item.label}</h4>
     
            </div>
        ))}</div>}
      </div>
    </div>
  );
};

export default TabBar;
