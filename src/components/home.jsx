import React from "react";
import Product from "./products";
import App from "../App";

const Home = () => {
    const products = [
        {
            name: 'Computer',
            image: 'https://via.placeholder.com/150',
            price: 29.99,
            quantity: 10,
            description: 'this is a computer device',

        },
        {
            name: 'Smart TV',
            image: 'https://via.placeholder.com/150',
            price: 99.99,
            quantity: 5,
            description: 'this is a Smart TV device',


        },
        {
            name: 'Smart Watch',
            image: 'https://via.placeholder.com/150',
            price: 42.99,
            quantity: 15,
            description: 'this is a Smart Watch device',


        },
        {
            name: 'Smart Phone',
            image: 'https://via.placeholder.com/150',
            price: 42.99,
            quantity: 15,
            description: 'this is a Smart Phone device',

        },
    ];

    return(
        <div>
            {products.map((product, index) => (
                <Product
                key ={index}
                name = {product.name}
                description={product.description}
                price={product.price}
                quantity ={product.quantity}
                />
            ))}
        </div>
    );
};

export default Home;
