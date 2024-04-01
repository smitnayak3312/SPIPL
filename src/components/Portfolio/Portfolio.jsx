import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
    const cards = [
        {
            imageSrc: "portfolio1.png",
            portfolioText: [
                "Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals who can shape and mold their collective experiences. All of them possess outstanding talent that can help accelerate your organization.",
                "Another piece of portfolio text."
            ],
            languages: [
                { name: "Android", icon: "Android.png" },
                { name: "PHP", icon: "Php.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        // Add more objects for additional cards here
        {
            imageSrc: "pgate.png",
            portfolioText: [
                "Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals who can shape and mold their collective experiences. All of them possess outstanding talent that can help accelerate your organization.",
                "Another piece of portfolio text."
            ],
            languages: [
                { name: "Android", icon: "Android.png" },
                { name: "PHP", icon: "Php.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        {
            imageSrc: "pkmall.png",
            portfolioText: [
                "Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals who can shape and mold their collective experiences. All of them possess outstanding talent that can help accelerate your organization.",
                "Another piece of portfolio text."
            ],
            languages: [
                { name: "Android", icon: "Android.png" },
                { name: "PHP", icon: "Php.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        {
            imageSrc: "psafe.png",
            portfolioText: [
                "Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals who can shape and mold their collective experiences. All of them possess outstanding talent that can help accelerate your organization.",
                "Another piece of portfolio text."
            ],
            languages: [
                { name: "Android", icon: "Android.png" },
                { name: "PHP", icon: "Php.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
    ];

    return (
        <div className='wrapper'>
            <h1 className='heading'>PORTFOLIO</h1>
            {cards.map((card, index) => (
                <div key={index} className="portfolio-container">
                    <div className="hr"></div>
                    <img src={card.imageSrc} alt="" />
                    <div className="portfolio-box">
                        <div className="portfolio-text">
                            {card.portfolioText.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                        <div className="portfolio-language">
                            <h3>MADE WITH</h3>
                            <div className="dotted1-line"></div>
                            {card.languages.map((language, index) => (
                                <img key={index} src={language.icon} alt={language.name} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
