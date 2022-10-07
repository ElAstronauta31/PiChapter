import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import HamburgerMenu from '../../siteContent/HamburgerMenu.png'
import FIACrest from '../../siteContent/FIACrest.png'
import { HeaderA, HeaderDiv, HeaderImg, HeaderLeftDiv, HeaderLi, HeaderRightDiv, HeaderTitle, HeaderTitleShort, HeaderUl, MenuImg } from './HeaderStyle';
import { Link } from 'react-router-dom';
import { StyledLink } from '../Brothers/BrothersStyle';
import Menu from './menu';
import { HeaderMenuDiv, MenuHolder } from './MenuStyle';

const Header = () => {

    const dispatch = useDispatch();
     
    const onClick = () => {
        var displayStatus = document.getElementById("menu").style.display;
        if (displayStatus === "none") {
            document.getElementById("menu").style.display = "block";
        } else {
            document.getElementById("menu").style.display = "none";
        }
    };

    // look into loading - first click does not work after that second click works



    return (
        <HeaderMenuDiv className="siteHeader">
            <HeaderDiv>
                <HeaderLeftDiv>
                    <Link to="/" style={{ textDecoration: 'none', color: "#002855" }}>
                        <HeaderImg src={FIACrest}></HeaderImg>
                    </Link>
                    <HeaderTitle>
                        Pi Chapter | Phi Iota Alpha Fraternity, Inc.
                    </HeaderTitle>
                    <HeaderTitleShort>
                        Π | ΦΙΑ
                    </HeaderTitleShort>
                </HeaderLeftDiv>
                <HeaderRightDiv>
                    <HeaderUl>
                        <Link to="/join" style={{ textDecoration: 'none', color: '#002855' }}>
                            <HeaderLi>Join</HeaderLi>
                        </Link>
                        <Link to="/about" style={{ textDecoration: 'none', color: '#002855' }}>
                            <HeaderLi>About Us</HeaderLi>
                        </Link>
                        <Link to="/brothers" style={{ textDecoration: 'none', color: '#002855' }}>
                            <HeaderLi>Brothers</HeaderLi>
                        </Link>
                    </HeaderUl>
                    <MenuImg onClick={() => dispatch(onClick)} src={HamburgerMenu}></MenuImg>
                </HeaderRightDiv>
            </HeaderDiv>
            <MenuHolder>
                <Menu />
            </MenuHolder>
            
        </HeaderMenuDiv>
    );
};

export default Header;