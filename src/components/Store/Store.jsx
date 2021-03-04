import React from "react";
import style from "./Store.module.css";
import Navbar from './Navbar/Navbar.jsx';

function Store() {
    return (
        <div className = {style["store__wrapper"]}>
            <Navbar/>
            <div className = {style["store__cards"]}>
            <h1 className = {style["store__title"]}>Список товаров</h1>
            </div>
        </div>
    );
}

export default Store;