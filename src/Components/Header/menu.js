import React from "react";
import { Link } from 'react-router-dom';
import { MenuDiv, MenuListDiv, MenuUl, MenuLi } from "./MenuStyle";

const Menu = () => {

    const onClick = () => {
        var displayStatus = document.getElementById("menu").style.display;
        if ( !displayStatus || displayStatus == "none") {
            document.getElementById("menu").style.display = "block";
        } else {
            document.getElementById("menu").style.display = "none";
        }
    };

    return (
        <div>
            <MenuDiv id="menu">
                <MenuListDiv>
                    <MenuUl>
                        <Link to="/" style={{ textDecoration: 'none', color: '#002855' }}>
                            <MenuLi onClick={onClick}>Home</MenuLi>
                        </Link>
                        <Link to="/join" style={{ textDecoration: 'none', color: '#002855' }}>
                            <MenuLi onClick={onClick}>Join</MenuLi>
                        </Link>
                        <Link to="/about" style={{ textDecoration: 'none', color: '#002855' }}>
                            <MenuLi onClick={onClick}>About Us</MenuLi>
                        </Link>
                        <Link to="/brothers" style={{ textDecoration: 'none', color: '#002855' }}>
                            <MenuLi onClick={onClick}>Brothers</MenuLi>
                        </Link>
                    </MenuUl>
                </MenuListDiv>
            </MenuDiv>
            
        </div>
        
    );
};

export default Menu;