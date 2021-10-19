import React from 'react';
import { Button, Carousel, Nav } from 'react-bootstrap';
import './Banner.css';

import { HashLink, NavHashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <Carousel className="pb-5" fade>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/QprvDL7/banner1.png"
                    alt="Medical Equipment"
                />
                <Carousel.Caption>
                    <h3>Equipment that Human need.</h3>
                    <p>We provide human life supports in emergency.</p>
                    <Button variant="info" size="lg" >
                        <NavHashLink as={HashLink} to="/products" className="text-white">Shop Now</NavHashLink>
                    </Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/yqx9jyf/banner2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Best in Services</h3>
                    <p>We never compromise with the quality of Services.</p>
                    <Button variant="info" size="lg" >
                        <NavHashLink as={HashLink} to="/home#services" className="text-white">Check Services</NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/FXf8XJm/banner3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Technology that make Sense!</h3>
                    <p>We use the latest and optimistic technology that helps to be accurate and concise.</p>
                    <Button variant="info" size="lg" >
                        <NavHashLink as={HashLink} to="/about" className="text-white">Know more About Us!</NavHashLink>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;