import React from 'react';
import pilogo from '../../siteContent/ChapterLogo.png'

const Header = () => {

    return (
        <div>
            <div class="leftHeader">
                <img src={pilogo}></img>
                <div>
                    Pi Chpater | Phi Iota Alpha Fraternity, Inc.
                </div>
            </div>
            <div class="rightHeader">
                <ul>
                    <li>Join</li>
                    <li>About Us</li>
                    <li>Brothers</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;