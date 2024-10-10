import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above 500/- Rupees
          </h6>
          <Nav className="ms-auto" style={{ padding : "0px 10px"}}>
            <LinkContainer to="/" activeClassName="" style={{ padding : "10px"}}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="" style={{ padding : "10px"}}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="" style={{ padding : "10px"}}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="" style={{ padding : "10px"}}>
              <Nav.Link>Terms and Policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
