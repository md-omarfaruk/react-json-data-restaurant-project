import React from 'react';

const Cart = (props) => {
    const orders = props.orders;

    const price = orders.reduce((total, newItem) => total + newItem.price, 0);


    return (
        <div className= "food-cart">
          <h3>Ordered Item: {orders.length}</h3> 
          <h4>Price: {price}</h4>
        </div>
    );
};

export default Cart;