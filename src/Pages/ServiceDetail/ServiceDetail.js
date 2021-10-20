import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    if (!services) {
        <Spinner animation="border" variant="primary" />
    }
    console.log(services);
    const foundService = services.find(x => x.id === serviceId);
    console.log(foundService);

    let name, summary, description, img;
    if (foundService) {
        ({ name, summary, description, img } = foundService);
        console.log(foundService);
    }

    return (
        <div>
            <Card className="text-center m-5" border="info">
                <Card.Header>{name}</Card.Header>
                <Card.Img variant="top" className="w-25 m-auto" src={img} />
                <Card.Body>
                    <Card.Title>{summary}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="fw-bold">Please see our about section to know about us.</Card.Footer>
            </Card>
        </div>
    );
};

export default ServiceDetail;