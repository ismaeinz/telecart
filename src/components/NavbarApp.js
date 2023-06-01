import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
const NavbarApp = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>Telecart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/wishing" className="nav-link">
          <Row className="align-items-center justify-content-center   ">
            <FaShoppingBasket className="m-2" size={30} />
            Wishing
          </Row>
        </Link>
        <Link to="/card" className="nav-link">
          <Row className="d-flex align-items-center justify-content-center">
            <FaShoppingCart className="m-2" size={30} />
            Card
          </Row>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
