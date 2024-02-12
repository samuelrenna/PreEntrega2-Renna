const asyncMock = [
    //XBOX
    {
    id:1,
    name: "Xbox Accesorio 1",
    categoryUno: "Xbox",
    categoryDos: "Accesorios",
    img: "imagen1.jpg",
    stock: 10,
    description: "Descripción del producto 1",
    price:416857
    },
    {
    id:2,
    name: "Xbox Juego 2",
    categoryUno: "Xbox",
    categoryDos: "Juegos",
    img: "imagen2.jpg",
    stock: 15,
    description: "Descripción del producto 2",
    price:478974
    },
    {
    id: 3,
    name: "Xbox Consola 3",
    categoryUno: "Xbox",
    categoryDos: "Consolas",
    img: "imagen3.jpg",
    stock: 5,
    description: "Descripción del producto 3",
    price:35168
    },
    //PLAYSTATION
    {
    id: 4,
    name: "PlayStyation Juego 1",
    categoryUno: "PlayStation",
    categoryDos: "Juegos",
    img: "imagen4.jpg",
    stock: 20,
    description: "Descripción del producto 4",
    price:463
    },
    {
    id: 5,
    name: "PlayStation Accesorio 1",
    categoryUno: "PlayStation",
    categoryDos: "Accesorios",
    img: "imagen5.jpg",
    stock: 8,
    description: "Descripción del producto 5",
    price:987
    },
    {
    id: 6,
    name: "PlayStation Consola 1",
    categoryUno: "PlayStation",
    categoryDos: "Consolas",
    img: "imagen6.jpg",
    stock: 12,
    description: "Descripción del producto 6",
    price:654
    },
    //NINTENDO
    {
    id: 7,
    name: "Nintendo Juego 1",
    categoryUno: "Nintendo",
    categoryDos: "Juegos",
    img: "imagen7.jpg",
    stock: 18,
    description: "Descripción del producto 7",
    price:687
},
    {
    id: 8,
    name: "Nintendo Consola 1",
    categoryUno: "Nintendo",
    categoryDos: "Consolas",
    img: "imagen8.jpg",
    stock: 10,
    description: "Descripción del producto 8",
    price:6874
    },
    {id: 9,
    name: "Nintendo Accesorio 1",
    categoryUno: "Nintendo",
    categoryDos: "Accesorios",
    img: "imagen9.jpg",
    stock: 6,
    description: "Descripción del producto 9",
    price:354
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(asyncMock);
        }, 1000);
    });
};

export const getProductsById = (productId) => {
    console.log('Buscando producto con ID:', productId);
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = asyncMock.find(prod => prod.id === productId);
            console.log('Producto encontrado:', product);
            resolve(product);
        }, 1000);
    });
}
export const getProductsByCategory = (category) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredProducts = asyncMock.filter(product => {
            return product.categoryUno === category || product.categoryDos === category;
            });
            resolve(filteredProducts);
        }, 1000);
        });
    };
