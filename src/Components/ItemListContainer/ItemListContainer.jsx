import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
const { pathname } = useLocation();
const { categoryUno, categoryId } = useParams();
console.log(categoryId, categoryUno);

const [products, setProducts] = useState([]);

console.log('Ubicación actual:', pathname);
console.log('Categorías actuales:', categoryUno, categoryId);

useEffect(() => {
    const fetchData = async () => {
    try {
        let response;
        if (pathname === '/' || !categoryId) {
        console.log('Buscando productos...');
        response = await getProducts();
        console.log('productos encontrados:', response);
        } else {
        console.log(`buscando productos por categoria ${categoryId}...`);
        response = await getProductsByCategory(categoryId);
        console.log(
            `Productos de la categoria ${categoryId} obtenidos:`,
            response
        );
        }
        setProducts(response);
    } catch (error) {
        console.error('Error:', error);
    }
    };

    fetchData();
}, [pathname, categoryId]);

useEffect(() => {
    console.log('Productos:', products);
}, [products]);

return (
    <div>
    <h2 style={{ textAlign: 'center', fontSize: '7vw', marginTop: '3.5vw' }}>{greeting}</h2>
    <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
