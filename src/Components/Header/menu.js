import React from "react";
import { Link } from 'react-router-dom';
import { MenuDiv, MenuListDiv, MenuUl, MenuLi } from "./MenuStyle";

const Menu = () => {
    

    return (
        <MenuDiv id="menu">
            <MenuListDiv>
                <MenuUl>
                    <Link to="/" style={{ textDecoration: 'none', color: '#002855' }}>
                        <MenuLi>Home</MenuLi>
                    </Link>
                    <Link to="/join" style={{ textDecoration: 'none', color: '#002855' }}>
                        <MenuLi>Join</MenuLi>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none', color: '#002855' }}>
                        <MenuLi>About Us</MenuLi>
                    </Link>
                    <Link to="/brothers" style={{ textDecoration: 'none', color: '#002855' }}>
                        <MenuLi>Brothers</MenuLi>
                    </Link>
                </MenuUl>
            </MenuListDiv>
        </MenuDiv>
    );
};

export default Menu;