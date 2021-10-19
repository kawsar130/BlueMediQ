import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';

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
                    <Button variant="info" size="lg" >Shop Now</Button>
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
                    <Button variant="info" size="lg" >Check Services</Button>
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
                    <Button variant="info" size="lg" >Check What We Offer</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;