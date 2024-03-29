import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AboutStyle, AboutMenu, AboutUl, AboutLi, Astyle, RedDiv, AboutH1, AboutTitleDiv, AboutMenuHidden, MenuSelectDiv, AboutDropDown, MainContentAbout, AboutDropDownDiv } from "./AboutStyle";
import { setActive } from "./aboutSlice";
import AboutUs from "./aboutus";
import ChapterHistory from "./chapterhistory";
import ContactUs from "./contactus";
import AboutMenuImg from "../../siteContent/AboutMenu.png";
import { useEffect } from "react";


const About = () => {

    
    const activeAbout = useSelector(state => state.about.activeAbout);
    const dispatch = useDispatch();


    const selector = () => {
        let select = document.getElementById("selectBox");
        let selectValue = select.value;
        return selectValue
    }

    return (
            <AboutStyle>
                <AboutDropDownDiv onChange={() => dispatch(setActive(selector()))}>
                    <AboutDropDown id="selectBox">
                        <option disabled selected value="blank">About Us</option>
                        
                        <option value="whoweare">Who We Are</option>
                    
                    
                        <option value="chapterhistory">Chapter History</option>
                   
                        <option value="contactus">Contact Us</option>
                    
                    </AboutDropDown>
                </AboutDropDownDiv>
                <MainContentAbout>
                    <AboutMenu id="aboutMenu">
                        <AboutTitleDiv>
                            <AboutH1>About Us</AboutH1>
                        </AboutTitleDiv>
                        <RedDiv>
                        <AboutUl>
                                <Astyle onClick={() => dispatch(setActive('whoweare'))}>
                                    <AboutLi>Who We Are</AboutLi>
                                </Astyle>
                                <Astyle onClick={() => dispatch(setActive('chapterhistory'))}>
                                    <AboutLi>Chapter History</AboutLi>
                                </Astyle>
                                <Astyle onClick={() => dispatch(setActive('contactus'))}>
                                    <AboutLi>Contact Us</AboutLi>
                                </Astyle>
                                <Astyle href="https://www.phiota.org" target="_blank" rel="noreferrer noopener" >
                                    <AboutLi>National Page</AboutLi>
                                </Astyle>
                            </AboutUl> 
                        </RedDiv>
                    </AboutMenu>
                    <MenuSelectDiv>
                        { activeAbout === 'whoweare' ? 
                            <AboutUs /> :
                        activeAbout === 'chapterhistory' ?
                            <ChapterHistory /> :
                        activeAbout === 'contactus'  ?
                            <ContactUs /> :

                            <div>
                                Error
                            </div>
                        
                        }
                    </MenuSelectDiv>
                </MainContentAbout>
                
                
                  
            </AboutStyle>
    );
};

export default About;