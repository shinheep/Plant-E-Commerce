import React from "react";
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link className="nav-link" to='/'><Navbar.Brand>Plantify</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/cart">Cart</Link>              
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/about">About Me</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
