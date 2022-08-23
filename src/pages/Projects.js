import React from "react";

function Projects (){
    return(
        <div className="Section" id="Projects">
                <h2>projects</h2>
                <hr></hr>
                <ul>
                    <li> 
                        <p><strong><a href="https://github.com/michelle-qiu/flickr-photos-by-username" target="_blank" rel="noopener noreferrer">Flickr Application:</a> </strong>
                        I utilized REST APIs from  Flickr, an image posting platform, to construct a site allowing users to input a Flickr username and view a selection of that user’s most popular images using React, JavaScript, HTML/CSS.</p>
                    </li>
                    <li>
                        <p><strong><a href="https://github.com/edwinagnew/Poetix_Sonnets"target="_blank" rel="noopener noreferrer">Poetry Generation:</a> </strong>
                        As part of my current work with the Interpretable Machine Learning Lab, I contributed to code that generates realistic Shakespearean sonnets using natural language processing tools and python.</p>
                    </li>
                    <li>
                        <p><strong><a href="https://github.com/michelle-qiu/michelle-qiu.github.io" target="_blank" rel="noopener noreferrer">Personal Website:</a> </strong>
                        After gaining introductory web development knowledge in the IBM Accelerate Program and independent learning, I developed this personal website using React, JavaScript, HTML/CSS. </p>
                    </li>
                    <li>
                        <p><strong><a href="https://github.com/michelle-qiu/MATH218-Spring-2022"target="_blank" rel="noopener noreferrer">Facial Recognition Model:</a> </strong>
                        As part of a supplemental linear algebra course, I used Jupyter Notebooks to train a facial image classifier using principal component analysis to visualize facial features that influence facial recognition with a 95% accuracy rate when tested on the Extended Yale Face Database B.</p>
                    </li>
                    <li>
                        <p><strong><a href="https://github.com/ignacio-rh/forced_displacements_mexico"target="_blank" rel="noopener noreferrer">News Scrapers:</a> </strong>
                        As an undergraduate research assistant, I developed web-scraping algorithms for a variety of Mexican news websites using Beautiful Soup and python.</p>
                    </li>
                </ul>
        </div>
    );
}
export default Projects;
