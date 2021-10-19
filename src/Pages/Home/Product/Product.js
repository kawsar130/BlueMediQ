import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = (props) => {
    const { name, description, category, price, img } = props.product;
    return (
        <Card className="px-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Footer className="mb-3">
                    <small className="fs-5 fw-bold">Price: ${price}</small>
                </Card.Footer>
                <Button variant="primary">Check Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;