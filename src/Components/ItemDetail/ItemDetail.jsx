import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, img, categoryUno, categoryDos, description, price, stock }) => {
return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt={name} style={{ width: '200px', height: '200px' }} />
            <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Categoria: {categoryUno},{categoryDos}</p>
        <p className="card-text">{description}</p>
            </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Stock: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
        </ul>
            <div className="card-body">
        <ItemCount stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada : ", quantity)} />
            </div>
        </div>
    </div>
);
}

export default ItemDetail;
