import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BlueMediQ</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;