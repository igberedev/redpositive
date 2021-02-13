import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

	const breakpoint = 500;
  
	React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
	}, [width]);

    return (
        <div className="heroSection">
            <div className="heroSection__block-1">
                <h1 className="heading-2">September 6-8, 2019 at 
                    <a 
                        href="https://socialinnovation.org/location/csi-annex/" target="blank" 
                        className="link-7">CSI Annex
                    </a>
                </h1>
            </div>

            <div className="heroSection__block-2">
                {
                    width > breakpoint ? 
                    <img 
                        src="https://uploads-ssl.webflow.com/5cc5b056b2ea2eb61233e46f/5cc70f8953fa121d6c5effc6_Colour%20Logo%201%20full.svg"
                        alt="Citizen Hacks" className="heroSection__image--1"
                    />
                    : 
                    <img 
                        src="https://uploads-ssl.webflow.com/5cc5b056b2ea2eb61233e46f/5ce3e39b74fe12470315f4bb_Logo_Vertical.svg"
                        alt="Citizen Hacks" className="heroSection__image--2"
                    />
                }
            </div>
        </div>
    )
}

export default HeroSection;