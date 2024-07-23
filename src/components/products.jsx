import React from "react";

const Product =({ name, image, description, price, qauntity}) =>{
    return(

        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p> description :{description}</p>
            <p>Price: ${price}</p>
            <p>Qauntity: {qauntity}</p>
        </div>
    );
};

export default Product;