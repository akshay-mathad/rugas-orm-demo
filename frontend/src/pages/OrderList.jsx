import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get('/api/orders');
            setOrders(response.data);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Order List</h1>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>{order.productId} - {order.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList; 