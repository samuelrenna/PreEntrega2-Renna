import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, img, price, stock, categoryUno, categoryDos }) => {
return (
    <div className="card" style={{ width: '18rem' }}>
    <img src={img} className="card-img-top" alt={name} style={{ width: '200px', height:'200px' }} />
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Categoria: {categoryUno},{categoryDos}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Stock: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
        <li className="list-group-item"><link to={'/item/${id}'}>Ver detalle</link></li>
    </ul>

    </div>
);
};

export default Item;
