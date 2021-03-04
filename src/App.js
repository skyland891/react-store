import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Store from "./components/Store/Store.jsx"
import Cart from "./components/Cart/Cart.jsx";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className = "App">
                <Header/>
                    <Route path = "/store" component = {Store}/>
                    <Route path = "/cart" component = {Cart}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
