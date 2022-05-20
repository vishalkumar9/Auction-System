import React from "react";
import "./MainNavigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/home">AUCTION</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/market">market</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
