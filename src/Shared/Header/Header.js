import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

// font awesome importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

const Header = () => {

    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />

    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="primary" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="home">BlueMediQ</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/products" className="text-white">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/about" className="text-white">About Us</Nav.Link>
                        {user?.email ?
                            <div className="user-info">
                                <img src={user.photoURL} alt="" className="user-img mx-2" />
                                <Navbar.Text className="me-3">
                                    <h6>{user?.displayName}</h6>
                                </Navbar.Text>
                                <Button onClick={logOut} className="btn btn-info text-white">{logoutIcon}</Button>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;