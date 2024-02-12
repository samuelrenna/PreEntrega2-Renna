import React, { useEffect, useState } from 'react';

const ItemCount = ({ stock,onAdd }) => {

    const [count, setCount] = useState(1);

    useEffect (()=> {
        if (stock === 0) {
            setCount(0);
        }
        else {
            setCount(1);
        }
    }, [stock]);

    const sumar = () => {
        if (count < stock ) {
            setCount (count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const AgregarAlCarrito = () => {
        if (onAdd) {
            onAdd(count);
        }
    }

return (
    <div>
        <button onClick={sumar} disabled={stock === 0 || count === stock }> + </button>
        <h2>{count}</h2>
        <button onClick={restar} disabled={stock === 0 || count === 1 }> - </button>
        <div>
            <button onClick={AgregarAlCarrito}disabled={stock === 0}>Agregar al Carrito</button>
        </div>
    </div>
);
};

export default ItemCount;
