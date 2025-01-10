import React from 'react';
import "./Portfolio.css";
import Footer from '../Footer/Footer'; // Ensure you import Footer properly

const Portfolio = () => {
    const cards = [
        {
            imageSrc: "portfolio1.png",
            portfolioText: [
               "I - cabs is cab servicing platform for company employees to access cab service through application on handy devices.",
               "It’s solution for IMS groups only. We have planned and built this with a flow of general cab service apps like Ola and Ubers as well.",
               "It’s developed on cross-platform technologies."
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
                "We have maintained and updated this product, as it’s strongly built on cross-platform."
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
                "At K-Mall, we take immense pride in our journey as a neighborhood retail haven, serving the vibrant community of Bhavnagar for more than ten years. As your go-to destination for daily needs and groceries, we have not only stocked shelves but also built lasting bonds of trust, loyalty, and support with our cherished customers.",
                "Kmall is basically an e-commerce personalized solution for only kmall’ Bhavnagar.",
                "Developed on cross-platform Flutter."
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
                "Safewine is basically an MLM organization, we have built the website for Safewine for all the users and visitors, and we have also built internal organization platforms where they can manage users and subscription MLM tree channels.",
                "Basically, we have built a proper multi-level marketing channel for Safewine private limited.",
                "It is built on PHP and MySQL database."
            ],
            languages: [
                { name: "Android", icon: "Android.png" },
                { name: "PHP", icon: "Php.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        {
            imageSrc: "directorypalanpur.png",
            portfolioText: [
                "Anjana Samaj Palanpur Directory Application is designed for the personal use of the Anjana Chaudhary community living in Palanpur and the surrounding area. It is a humble attempt to integrate the community in a modern way.",
                "The app's prominent features include two types of directories: a business directory and a family directory."
            ],
            languages: [
                { name: "Flutter", icon: "flutter.png" },
                { name: "Laravel", icon: "laravel.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        {
            imageSrc: "gtuhome.png",
            portfolioText: [
                "GTU Home app provides seamless access to all GTU portals, offering a one-stop solution for all your academic needs. Stay organized and informed with our comprehensive and user-friendly app designed specifically for the GTU community."
            ],
            languages: [
                { name: "Flutter", icon: "flutter.png" },
                { name: "Laravel", icon: "laravel.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
        {
            imageSrc: "spikepeople.png",
            portfolioText: [
                "Spike people ERP is a cloud-based work management platform designed to help teams collaborate and manage their work more efficiently. It offers features such as project management, task automation, and reporting to streamline workflows and increase productivity.",
                "Spike people ERP integrates with various third-party apps and services, allowing teams to access all their work tools in one place.",
                "The platform is suitable for teams of all sizes and industries, making it a popular choice for businesses looking to centralize their work management and collaboration needs."
            ],
            languages: [
                { name: "Laravel", icon: "laravel.png" },
                { name: "HTML", icon: "Html.png" },
                { name: "CSS", icon: "CSS3.png" },
                { name: "MySQL", icon: "Mysql.png" }
            ]
        },
    ];

    return (
        <div>
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
        <Footer /> {/* Footer is added here */}
        </div>
    );
};

export default Portfolio;
