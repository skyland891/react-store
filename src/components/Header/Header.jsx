import React from "react";
import { NavLink } from "react-router-dom";
import  logo from "../../img/logo.svg";
import style from "./Header.module.css";

function Header() {
    return (
        <div className = {style["header__wrapper"]}>
            <NavLink to = "/store"><img src={logo} alt="react store" width = "100px"/></NavLink>
            <NavLink to = "/cart"><i className="fas fa-shopping-cart fa-2x"></i></NavLink>
        </div>
    );
}

export default Header;