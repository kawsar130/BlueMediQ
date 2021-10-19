import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Service.css';

const Services = () => {
    const [services, setServices] = useState([]);

    // fetching services data
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div id="services">
            <h2>Our Services</h2>
            <div className="service-container container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;