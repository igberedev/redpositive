import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__icon">
                <img 
                    src="https://uploads-ssl.webflow.com/5cc5b056b2ea2eb61233e46f/5cc5c8cdd9da33f58e820358_logo-1.svg" 
                    width="55" alt="" className="header__logo--1"
                />
                <p className="header__logo--text">CH</p>
            </div>
            <a 
                id="mlh-trust-badge" 
                href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;
                    utm_campaign=2020-season&amp;utm_content=black" 
                target="blank"
                className="header__outside-link"
            >
                <img 
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg" 
                    alt="Major League Hacking 2020 Hackathon Season" 
                    className="header__logo--2"
                />
            </a>
        </div>

    )
}

export default Header;