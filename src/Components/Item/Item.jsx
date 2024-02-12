import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa NavLink desde react-router-dom
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, img, price, stock, categoryUno, categoryDos }) => {
return (
    <div className="card" style={{ width: '18rem' }}>
    <img src={img} className="card-img-top" alt={name} style={{ width: '200px', height:'200px' }} />
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Categoria: {categoryUno}, {categoryDos}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Stock: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
        {/* Usa NavLink para crear el enlace */}
        <li className="list-group-item"><NavLink to={`/item/${id}`}>Ver detalle</NavLink></li>
    </ul>
    </div>
);
};

export default Item;
