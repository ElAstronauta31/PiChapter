import React from 'react';
import pilogo from '../../siteContent/ChapterLogo.png'
import { HeaderA, HeaderDiv, HeaderImg, HeaderLeftDiv, HeaderLi, HeaderRightDiv, HeaderTitle, HeaderUl } from './HeaderStyle';

const Header = () => {

    return (
        <HeaderDiv class="siteHeader">
            <HeaderLeftDiv>
                <HeaderImg src={pilogo}></HeaderImg>
                <HeaderTitle>
                    Pi Chapter | Phi Iota Alpha Fraternity, Inc.
                </HeaderTitle>
            </HeaderLeftDiv>
            <HeaderRightDiv>
                <HeaderUl>
                    <HeaderLi><HeaderA>Join</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA>About Us</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA>Brothers</HeaderA></HeaderLi>
                </HeaderUl>
            </HeaderRightDiv>
        </HeaderDiv>
    );
};

export default Header;