import React from 'react';
import pilogo from '../../siteContent/ChapterLogo.png'
import { HeaderA, HeaderDiv, HeaderImg, HeaderLeftDiv, HeaderLi, HeaderRightDiv, HeaderTitle, HeaderUl } from './HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <HeaderDiv class="siteHeader">
            <HeaderLeftDiv>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <HeaderImg src={pilogo}></HeaderImg>
                </Link>
                <HeaderTitle>
                    Pi Chapter | Phi Iota Alpha Fraternity, Inc.
                </HeaderTitle>
            </HeaderLeftDiv>
            <HeaderRightDiv>
                <HeaderUl>
                    <Link to="/join">
                        <HeaderLi>Join</HeaderLi>
                    </Link>
                    <Link to="/about">
                        <HeaderLi>About Us</HeaderLi>
                    </Link>
                        <HeaderLi>Brothers</HeaderLi>
                </HeaderUl>
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;