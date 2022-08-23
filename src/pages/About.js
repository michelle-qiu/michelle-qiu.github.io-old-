import React from "react";
import profile from "../Images/Portrait.jpg";

function About (){
    return(
        <div className="Section">
                <h2>about me</h2>
                <hr></hr>
                <img className="profilepicture" src={profile} alt=""></img>
                <p>My name is Michelle, and I am currently studying Computer Science (with a concentration in AI/ML) and Sociology at Duke University. I am extremely interested in applications of 
                    computer science and machine learning in a variety of interdisciplinary fields. In particular, I strive to understand the role of data in generating impactful societal-level change. </p>
                <p>Please feel free to <a href="mailto:michelle.qiu@duke.edu"><strong>reach out</strong></a> to me about any of my projects or to collaborate!</p>
                <p>
                    In my free time, I enjoy learning about web development, hiking, cooking/baking, singing, and crocheting.
                </p>
        </div>
    ); 
}
export default About;
