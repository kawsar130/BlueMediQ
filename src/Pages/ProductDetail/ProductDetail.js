import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = (props) => {
    const { productId } = useParams();
    // Use useEffect
    return (
        <div>
            <h2>This is Product: {productId}</h2>
        </div>
    );
};

export default ProductDetail;