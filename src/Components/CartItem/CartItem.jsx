import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(cartContext);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{name}</h5>
                            <button className="btn btn-outline-danger" onClick={() => removeItem(id)}>x</button>
                        </div>
                        <small className="text-body-secondary">
                            Cantidad Agregada: {quantity}
                        </small>
                        <p className="card-text"> Precio unitario ${price}</p>
                        <p className="card-text"> Precio Sub-Total $ {price*quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
