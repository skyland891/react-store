import React from 'react';
import style from "./Navbar.module.css";
function Navbar() {
    return (
        <div className = {style["navbar__wrapper"]}>
            <ul>
                <li className = {style["navbar__item"]}>Ноутбуки</li>
                <li className = {style["navbar__item"]}>Смартфоны</li>
                <li className = {style["navbar__item"]}>Планшеты</li>
                <li className = {style["navbar__item"]}>Мониторы</li>
                <li className = {style["navbar__item"]}>Часы</li>
                <li className = {style["navbar__item"]}>Браслеты</li>
            </ul>
        </div>
    );
}
export default Navbar;