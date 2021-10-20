import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, description, price, img } = product;
    return (
        <Card className="px-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Footer className="mb-3">
                    <small className="fs-5 fw-bold">Price: ${price}</small>
                </Card.Footer>
                <Link to={`/product/${id}`}>
                    <Button variant="primary">Check Details</Button>
                </Link>
            </Card.Body>
        </Card >
    );
};

export default Product;