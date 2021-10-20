import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';


const ProductDetail = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);

    const intProductId = parseInt(productId);


    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    if (!products) {
        <Spinner animation="border" variant="primary" />
    }

    const foundProduct = products.find(x => x.id === intProductId);

    let name, description, category, price, img;
    if (foundProduct) {
        ({ name, description, category, price, img } = foundProduct);
    }

    return (
        <div>
            <Card className="text-center m-5" border="info">
                <Card.Header>{category}</Card.Header>
                <Card.Img variant="top" className="w-25 m-auto" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="info">Buy Now</Button>
                </Card.Body>
                <Card.Footer className="fw-bold">Price: ${price}</Card.Footer>
            </Card>
        </div>
    )
}

export default ProductDetail;