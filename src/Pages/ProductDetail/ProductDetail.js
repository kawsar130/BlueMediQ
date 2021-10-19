import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
    const { productId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // const exactItem = products.find(td == productId);

    return (
        <div>
            {

            }
        </div>
    );
};

export default ProductDetail;