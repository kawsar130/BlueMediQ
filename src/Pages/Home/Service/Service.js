import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const {name, summary, img} = props.service;
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
                    <Button variant="info">Learn More...</Button>
                </Card.Footer>
            </Card>
    );
};

export default Service;