import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Service: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;