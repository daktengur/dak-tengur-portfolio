import React from "react";
import dtDog from "../assets/about-me/dt-dog.jpg";
import dtSushi from "../assets/about-me/dt-sushi.jpg";
import dtWoodCutting from "../assets/about-me/dt-wood-cutting.jpg";
import dtTravelWanderlust from "../assets/about-me/dt-travel-wanderlust.jpg";
import dtSeaNature from "../assets/about-me/dt-sea-nature.jpg";
import dtSkyGazer from "../assets/about-me/dt-sky-gazer.jpg";

const AboutMe = props => (
    <div className="aboutMe-header">
        <div className="intro">
            <h2>From Mauritius, to London </h2>
            <p>
                Born in Mauritius and moving to England at a young age, I was deeply fascinated
                by technology and the value it can unlock. From experiencing Sony walkmans, to
                CD players, to MP3 players, to smartphones ... the rapid pace of change
                within technology was striking. An eternally progressive sector, influencing the
                pace of many industries alike.
            </p>
            <p>
                Coming from an I.T focused background and studying Business Computing Systems at
                university, I soon developed a working knowledge of the base fundamentals within
                software development. These core skills later extended into aspects such as
                object oriented UX, and the skeleton of digital products. Concepts such as
                domain modelling, interpretting design patterns object-orientedly, communicating
                with developers, etc... soon became second-nature.
            </p>
            <p>
                Along the way, I've learned a few lessons:
                <ul>
                    <li>Design process and decisions aren’t the same for every project.
                        Understanding, interpreting and contextualising of approach and process are keys
                        to success.</li>
                    <li>Technical feasibility of a design (knowing the constraints and limitations) coupled with early user feedback, are imperative factors to keep lead times in development down.
                        No-one wants costly reworks.</li>
                </ul>
            </p>
        </div>
        <div className="aboutMe-hobbies">
            <h2>
                Away from the screen
            </h2>
            <p>
                In my spare time, you can usually find me hogging on sushi, travelling, gazing at
                or drawing palm trees. I have a little Jack Russell named Leo. He’s super
                naughty, equally adorably cute at the same time. Meetings over Microsoft Teams
                just isn’t the same without the usual woof woofs.
            </p>
            <p>
                On weekends, I help my wife with an event catering business called <span>
                    <a href="http://www.instagram.com/___stylemynight">
                         Style My Night</a>. Part of the fun comes in creating innovative backrops or wooden cutouts, and tablescaping.
                </span> 
            </p>
        </div>
        <div className="aboutMe-gallery">
            <img src={dtDog} alt="The Shell logo"/>
            <img src={dtSushi} alt="The Volo logo"/>
            <img src={dtWoodCutting} alt="The Salve logo"/>
            <img
                src={dtTravelWanderlust}
                alt="The Farmers Weekly Interactive by RELX logo"/>
            <img src={dtSeaNature} alt="The Cisco logo"/>
            <img src={dtSkyGazer} alt="The Cisco logo"/>
        </div>
        <div className="aboutMe-faq">
            <h2>
                Dive deeper
            </h2>
            <p>From past conversations with recruiters, or prospective clients, I’ve jotted
                down some of my approaches and thoughts.</p>
            <div className="aboutMe-faq-item">
                <h3>How do you typically approach a design project?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>What areas of product development do you cover?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>How do you keep yourself updated in terms of skills and experience?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>How do you work with others?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>
                    What are your thoughts on “designers need to code"?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>Where do you see the future direction of design?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>What's been your proudest moment as a designer?</h3>
                <p>Answer coming soon...</p>
            </div>
            <div className="aboutMe-faq-item">
                <h3>Who are your insparational figures?</h3>
                <p>Answer coming soon...</p>
            </div>
        </div>
    </div>
);

export default AboutMe;