import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from 'react-router-dom';

const ItemListContainer = ({ greeting,}) => {
    const { pathname } = useLocation();
    /*const { categoryId } = useParams();*/const { categoryUno, categoryId } = useParams();
    const [products, setProducts] = useState([]);

    console.log('Ubicación actual:', pathname);
    console.log('categorias actuales:',categoryUno, categoryId);

    useEffect(() => {

        console.log('Ejecutando useEffect'); // Agrega un log para saber cuándo se ejecuta el useEffect
    console.log('Ubicación actual:', pathname); // Agrega un log para ver la ubicación actual
    console.log('ID de categoría:', categoryId); // Agrega un log para ver el categoryId actual

    const fetchData = async () => {
        try {
            let response;
            if (pathname === '/' || !categoryId) {
                console.log('Fetching all products...');
                response = await getProducts();
                console.log('Products fetched:', response);
            } else {
                console.log(`Fetching products for category ${categoryId}...`);
                response = await getProductsByCategory(categoryId);
                console.log(`Products for category ${categoryId} fetched:`, response);
            }
            setProducts(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

        fetchData();
    }, [pathname, categoryId]);

    useEffect(() => {
        console.log('Productos:', products);
    }, [products]);

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
