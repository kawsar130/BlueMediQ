import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="mt-5">
            <h2>Products Showcase</h2>
            <div className="products-container container my-5">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;