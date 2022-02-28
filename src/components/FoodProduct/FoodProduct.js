import React from 'react';
import "./FoodProduct.css"

const FoodProduct = (props) => {

    const{id, image, food_name, restaurant_name, email, phone_number, price} = props.foodData;
    const handleOrders = props.handleOrders;

    return (
        <div className="food-container">
            <div className="food-product">
                <h5>{id}. {food_name}</h5>
                <h4><i className="price">Price: {price}</i></h4>
                <img src={image} className="img-style" alt="" />
                <p>Restaurant Name: {restaurant_name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phone_number}</p>
                <button className="order" onClick={()=>handleOrders(props.foodData)}>Order Now</button>
            </div>
        </div>
        
    );
};

export default FoodProduct;