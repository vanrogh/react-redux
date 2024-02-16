import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/other">Other</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent;