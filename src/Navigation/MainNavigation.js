import React from "react";
import "./MainNavigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href='/'>AUCTION</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/market">Market</Nav.Link>
          <Nav.Link href="/addProduct">Add Product</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
