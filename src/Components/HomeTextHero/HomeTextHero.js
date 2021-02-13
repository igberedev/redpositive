import React from "react";
import "./HomeTextHero.css";

const HomeTextHero = () => {
    return (
        <div className="homeTextHero">
            <div className="homeTextHero__info">
                <p className="home-text-paragraph">For 36 hours, join students and leading innovators in tackling the 
                challenge of privacy in the digital age.<br/>Featuring keynote speaker
                <a href="https://www.ryerson.ca/pbdce/about/ann-cavoukian/" target="blank" className="link-8">
                    Dr. Ann Cavoukian</a>
                    </p>    
            </div> 

            <div className="home-text-links">
                <a 
                    href="https://citizenhacks.devpost.com/" 
                    id="closed" target="blank" className="home-text-link home-text-link--1"
                >
                    <div className="text-block-2">Devpost</div>
                </a>

                <a 
                    href="https://docs.citizenhacks.com/#friday-september-6th" 
                    target="blank" className="home-text-link home-text-link--2"
                >
                    <div className="text-block-11">View Schedule</div>
                </a>
            </div>
        </div>
    )
}

export default HomeTextHero;