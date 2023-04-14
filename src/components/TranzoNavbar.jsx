import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './css/tranzo_nav.css';
// import Lin

const TranzoNavbar = () => {
    return (
        <Navbar className='nav_bar' expand="lg">
            <Container>
                <Navbar.Brand className='nav_bar_title' as={Link} to="/">Tranzo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default TranzoNavbar;