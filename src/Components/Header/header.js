import React from 'react';
import pilogo from '../../siteContent/ChapterLogo.png'
import FIACrest from '../../siteContent/FIACrest.png'
import { HeaderA, HeaderDiv, HeaderImg, HeaderLeftDiv, HeaderLi, HeaderRightDiv, HeaderTitle, HeaderUl } from './HeaderStyle';
import { Link } from 'react-router-dom';
import { StyledLink } from '../Brothers/BrothersStyle';

const Header = () => {
    

    return (
        <HeaderDiv class="siteHeader">
            <HeaderLeftDiv>
                <Link to="/" style={{ textDecoration: 'none', color: "#002855" }}>
                    <HeaderImg src={FIACrest}></HeaderImg>
                </Link>
                <HeaderTitle>
                    Pi Chapter | Phi Iota Alpha Fraternity, Inc.
                </HeaderTitle>
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
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;