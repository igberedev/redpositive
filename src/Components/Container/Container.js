import React from "react";
import "./Container.css";

const Container = () => {
    return (
        <div className="container">
            <p className="container__bold-text">
                Youth play an essential role in defining our digital future.
            </p>

            <p className="container__light-text">
                That’s why we created Citizen Hacks, a student-run hackathon that encourages
                the next generation of innovators and users to actively participate in building
                a digital world that works for everyone. Citizen Hacks is a platform for university, 
                college and high school students to collaborate with educators, businesses, nonprofits, 
                and governmental organizations in exploring the challenges and potential of creating 
                technology that benefits society.
            </p>
        </div>
    )
}

export default Container;