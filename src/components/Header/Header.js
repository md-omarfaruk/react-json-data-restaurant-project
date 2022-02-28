import React from 'react';
import image from "./header_img/logo.png";
import img from "./header_img/banner.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div>
                
                <img className="banner-img-one" src={image} alt="" />
                <img className="banner-img-two" src={img} alt="" />

            </div>
        </div>
    );
};

export default Header;