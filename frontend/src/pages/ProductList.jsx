import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList; 