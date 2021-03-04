import React from "react";
import style from "./Cart.module.css";

function Cart() {
    return (
        <div className = {style["cart__wrapper"]}>
            <h1 className = {style.cart__title}>Корзина</h1>
        </div>
    );
}

export default Cart;