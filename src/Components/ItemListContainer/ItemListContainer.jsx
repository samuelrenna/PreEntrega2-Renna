import { useEffect, useState } from "react";
import { getProducts, getProductsById } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    // Imprimir los datos products en la consola para verificar
    useEffect(() => {
        console.log("Productos:", products);
    }, [products]);

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
