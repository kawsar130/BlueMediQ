import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { id, name, summary, img } = service;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {summary}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/service/${id}`}>
                    <Button variant="info">Learn More...</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default Service;