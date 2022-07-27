import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WWA from "./whoweare";
import ChapterHistory from "./chapterhistory";
import ContactUs from "./contactus";
import AboutUs from "./aboutus";

const About = () => {

    return (
            <div>
                <div>
                   <ul>
                        <li>About Us</li>
                        <li>Who We Are</li>
                        <li>Chapter History</li>
                        <li>Contact Us</li>
                   </ul>
                </div>
                {
                    
                    <div>

                    </div>  
                }
                  
            </div>
    );
};

export default About;