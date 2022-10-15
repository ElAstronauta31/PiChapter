import React, { useEffect } from 'react';
import HamburgerMenu from '../../siteContent/HamburgerMenu.png'
import FIACrest from '../../siteContent/FIACrest.png'
import { HeaderDiv, HeaderImg, HeaderLeftDiv, HeaderLi, HeaderRightDiv, HeaderTitle, HeaderTitleShort, HeaderUl, MenuImg } from './HeaderStyle';
import { Link } from 'react-router-dom';
import Menu from './menu';
import { HeaderMenuDiv, MenuHolder } from './MenuStyle';

const Header = () => {

    
     
    const onClick = () => {
        var displayStatus = document.getElementById("menu").style.display;
        if ( !displayStatus || displayStatus === "none") {
            document.getElementById("menu").style.display = "block";
        } else {
            document.getElementById("menu").style.display = "none";
        }
    };
    
    //For if menu is displayed but logo is click to go home.
    const onClickHome = () => {
        var displayStatus = document.getElementById("menu").style.display;
        if ( !displayStatus || displayStatus === "block") {
            document.getElementById("menu").style.display = "none";
        } else {
            return
        }
    };

    useEffect(() => {
        const handleScroll = event => {
            var displayStatus = document.getElementById("menu").style.display;
            if (displayStatus === "block" ) {
                return document.getElementById("menu").style.display = "none";
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // when loading in display = "" before having value of none so have to account for that in IF statement. 



    return (
        <HeaderMenuDiv className="siteHeader">
            <HeaderDiv>
                <HeaderLeftDiv>
                    <Link to="/" style={{ textDecoration: 'none', color: "#002855" }}>
                        <HeaderImg onClick={onClickHome} src={FIACrest}></HeaderImg>
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
                    <MenuImg id="menuImg" className='menuImg' onClick={onClick} src={HamburgerMenu}></MenuImg>
                </HeaderRightDiv>
            </HeaderDiv>
            <MenuHolder>
                {
                    <Menu />
                }
                
            </MenuHolder>
            
        </HeaderMenuDiv>
    );
};

export default Header;