import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-container">
            <button className="btn navbar-btn cart-button">
                <i className="bi bi-cart icon-lg"></i>
                <p className="cart-count"style={{ fontSize: '0.75rem',}}>99+</p>
            </button>
        </div>
    );
};

export default CartWidget;
