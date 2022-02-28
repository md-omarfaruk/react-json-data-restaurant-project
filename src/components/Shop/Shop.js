import React, { useEffect, useState } from 'react';
import FoodProduct from '../FoodProduct/FoodProduct';
import Data from "../../data.json";
import Cart from '../Cart/Cart';

const Shop = () => {

    const [foodInfo, setFoodInfo] = useState([]);
    useEffect(()=> { setFoodInfo(Data) }, [])

    const [orders, setOrders] = useState([]);
    const handleOrders = (foodData) => {
            
        const totalOrders = [...orders, foodData];
            setOrders(totalOrders)
    }

    return (
        <div className="shop">
            <div>
                {
                foodInfo.map((foodData) => <FoodProduct foodData = {foodData} key = {foodData.id} handleOrders = {handleOrders}></FoodProduct>)
                }
            </div> 

            <div>
                <Cart orders = {orders}></Cart>
            </div>
        </div>
    );
};

export default Shop;