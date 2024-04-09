import React from 'react';
import AboutCSS from './About.module.css';
import Marquee from 'react-fast-marquee';

const About1 = () => {
    return (
        <div className={AboutCSS.aboutWrapper}>
            <h1 className={AboutCSS.heading}>ABOUT</h1>
            <div className={AboutCSS.textContainer}>
                <div className={AboutCSS.aboutText1}>
                    <div className={AboutCSS.hr}></div>
                    <h2>OUR MISSION</h2>
                    <p>Our clients are different, but they all share the need to have a software solution built to generate revenue streams, establish communication channels, or streamline business operations. We understand that our success is measured by the success of our clients.</p>
                </div>
                <div className={AboutCSS.aboutText2}>
                    <div className={AboutCSS.hr}></div>
                    <h2>OUR VISION</h2>
                    <p>"Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals who can shape and mold their collective experiences. All of them possess outstanding talent that can help accelerate your organization."</p>
                </div>
            </div>


            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container}>
                <div  className={AboutCSS.text} >
                <div  className={AboutCSS.one} >
                    <h3>DISCOVERY</h3>
                    <p>User research forms a pivotal part of the design strategy as it helps designers understand the psyche and behavior of users. Insights about how people live their lives enable us to respond more effectively to user needs, understanding them, and hence, coming up with informed and inspired design solutions.</p>
                    </div>
                </div>
                <div className={AboutCSS.img}>
                    <img src="about1.png" alt="" />
                </div>
            </div>
            
            <div className={AboutCSS.vline}></div>
            <div className={AboutCSS.hline}></div>


            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container2}>

                <div className={AboutCSS.img2}>
                    <img src="about2.png" alt="" />
                </div>
                <div className={AboutCSS.text2}>
                <div className={AboutCSS.two}>
                    <h3>DEFINE</h3>
                    <p>Designers create scenarios to describe the stories and situations in which a user will use the product in order to map priorities and usage patterns for a specific product.</p>
                    </div>
                </div>
            </div>
            <div className={AboutCSS.hline2}></div>
            <div className={AboutCSS.vline2}></div>


            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container}>
                <div className={AboutCSS.text}>
                <div className={AboutCSS.three}>
                    <h3>TARGET</h3>
                    <p>Designers have recognized their target user, who might use the product. The next step is to map out how they might use the product. This helps them design the flow of the product as smoothly as possible.</p>
                    </div>
                </div>
                <div className={AboutCSS.img}>
                    <img src="about3.png" alt="" />
                </div>
            </div>
            <div className={AboutCSS.hline}></div>
            <div className={AboutCSS.vline}></div>



            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container2}>

                <div className={AboutCSS.img2}>
                    <img src="about4.png" alt="" />
                </div>
                <div className={AboutCSS.text2}>
                <div className={AboutCSS.four}>
                    <h3>DESIGN</h3>
                    <p>Design helps the designers generate sketches, wireframes, and prototypes to create and iterate on design ideas before they go into production.</p>
                    </div>
                </div>
            </div>
            <div className={AboutCSS.hline2}></div>
            <div className={AboutCSS.vline3}></div>



            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container}>
                <div className={AboutCSS.text}>
                <div className={AboutCSS.five}>
                    <h3>DEVLOP</h3>
                    <p>Once a visual concept is finalized, all the screens of the product are created accordingly. UI design is the language through which the product is prepared to communicate with the user.</p>
                    </div>
                </div>
                <div className={AboutCSS.img}>
                    <img src="about5.png" alt="" />
                </div>
            </div>
            <div className={AboutCSS.hline}></div>
            <div className={AboutCSS.vline}></div>



            <div className={AboutCSS.hr1}></div>
            <div className={AboutCSS.container2}>

                <div className={AboutCSS.img2}>
                    <img src="about6.png" alt="" />
                </div>
                <div className={AboutCSS.text2}>
                <div className={AboutCSS.six}>
                    <h3>DELIVER</h3>
                    <p>The final phase of the project is design delivery, in which the designer will deliver all assets, resources, and style guides to the development team and support the development effort in their capacity as a design consultant.</p>
                    </div>
                </div>
            </div>


            <div className={AboutCSS.client}>
                <div className={AboutCSS.hrbar}></div>

                <div className={AboutCSS.vbar}></div>
                <h2 className={AboutCSS.mainheading}>CLIENTS</h2>
                <p className={AboutCSS.smallheading}>THEY TRUST US</p>
                <div className={AboutCSS.clientimg}>
               <Marquee pauseOnHover>
                    <img src="safe.png" alt="" />
                    <img src="img3.png" alt="" />
                    <img src="gate.png" alt="" />
                    <img src="soor.png" alt="" />
                    <img src="kmall.png" alt="" />

                    </Marquee>
                </div>
               
            </div>
            

        </div>
        
    );
}

export default About1;
