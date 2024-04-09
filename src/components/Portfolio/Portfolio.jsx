import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
    const cards = [
        {
            imageSrc: "portfolio1.png",
            portfolioText: [
               " I - cabs is cab servicing platform for company employees to access cab service through application on handy devices. ",
                "It’s solution for IMS groups only. We have planned and builded this with a flow of general cab service apps like ola and ubers as well.",
                "It’s developed on cross platform technologies. "
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
                "Gate Tiger Society management software that makes life easier for everyone in a gated community, from residents and management committee members to security guards and facility managers. Packed with features, it reduces many hassles – authorized entry of delivery executives, paying maintenance bills, availing home service, raising tickets to the facility manager.",
                "We have maintained and updated this product, as it’s strongly builded on cross platform."
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
                "At K-Mall, we take immense pride in our journey as a neighbourhood retail heaven, serving the vibrant community of Bhavnagar for more than ten years. As your go-to destination for daily needs and groceries, we have not only stocked shelves but also built lasting bonds of trust, loyalty, and support with our cherished customers.",
                "Kmall is basically e-commerce personalised solution for only kmall’ bhavnagar.",
                "Developed on cross platform flutter."
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
                "Safewine is basically MLM organisation we have builded the website for safewine for all the users and visitors also we have builded internal organisation platforms where they can manage users and subscription MLM tree chanels.",
                "Basically we have builded the proper Multi - level - marketing channel for Safewine private limited.",
                "It is builded on PHP and Mysql database. "
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
