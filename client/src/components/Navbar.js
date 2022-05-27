import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Navbar as NavbarComponent, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <>
      <Container fluid className="bg-dark py-2">
        <Container className="d-flex align-items-center">
          <NavbarComponent variant="dark" expand="sm" className="w-50">
            <NavbarComponent.Toggle />
            <NavbarComponent.Collapse>
              <Nav>
                <Link className="text-white nav-link" to="/">
                  HOME
                </Link>
                <Link className="text-white nav-link" to="/about">
                  ABOUT
                </Link>
                <Link className="text-white nav-link" to="/contact">
                  CONTACT
                </Link>
                <Link className="text-white nav-link" to="/">
                  TERMS
                </Link>
              </Nav>
            </NavbarComponent.Collapse>
          </NavbarComponent>
          <div className="text-white d-flex justify-content-end w-50">
            <button
              className="bg-white rounded-circle"
              style={{ width: "50px", height: "50px", fontSize: "30px" }}
            >
              <Icon icon={faUser} />
            </button>
          </div>
        </Container>
      </Container>

      <NavbarComponent variant="light" bg="light" expand="sm">
        <Container>
          <NavbarComponent.Brand>
            <Link to="/">
              <img src={Logo} style={{ width: "100px" }} />
            </Link>
          </NavbarComponent.Brand>

          <NavbarComponent.Toggle />
          <NavbarComponent.Collapse>
            <Nav className="ms-auto">
              <Link className="nav-link text-dark" to="/">
                BOOKS
              </Link>
              <Link className="nav-link text-dark" to="/">
                TEXTBOOKS
              </Link>
              <Link className="nav-link text-dark" to="/">
                MAGAZINES
              </Link>
              <Link className="nav-link text-dark" to="/">
                KIDS
              </Link>
            </Nav>
          </NavbarComponent.Collapse>
        </Container>
      </NavbarComponent>
    </>
  );
}

export default Navbar;
