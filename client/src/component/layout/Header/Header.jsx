import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
    burgerColor: "#EE2F07",
    burgerColorHover: "#113093",
    logo,
    logoWidth: "20vmax",
    navColor1: "#F7E9E6",
    logoHoverSize: "12px",
    logoHoverColor: "#CB3430",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "black",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#CB3430",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "black",
    searchIconColor: "black",
    cartIconColor: "black",
    profileIconColorHover: "#CB3430",
    searchIconColorHover: "#CB3430",
    cartIconColorHover: "#CB3430",
    cartIconMargin: "1vmax",
};

const Header = () => {
    return <ReactNavbar {...options} />;
};

export default Header;
