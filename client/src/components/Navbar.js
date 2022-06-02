import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  Navbar as NavbarComponent,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Navbar({auth, setAuth}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  function logout(){
    handleToggle();
    localStorage.removeItem('Auth');
    setAuth();
    console.log('logged out');
  }

  return (
    <>
      {/*----------------------------------FIRST NAVBAR */}
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
                <Link className="text-white nav-link" to="/terms">
                  TERMS
                </Link>
              </Nav>
            </NavbarComponent.Collapse>
          </NavbarComponent>

          {auth ? ( //if it's logged in
            <div className="text-white d-flex justify-content-end w-50">
              <button
                onClick={handleToggle}
                className="bg-white rounded-circle"
                style={{ width: "50px", height: "50px", fontSize: "30px" }}
              >
                <Icon icon={faUser} />
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-end w-50">
              <Link to="/login" className="nav-link text-white">LOGIN</Link>
            </div>
          )}
        </Container>
      </Container>

      {/*----------------------------------PROFILE MENU */}
      <Offcanvas
        show={toggle}
        onHide={handleToggle}
        placement="end"
        style={{ width: "250px", height: "210px" }}
      >
        <Offcanvas.Header closeButton style={{ paddingBottom: "0" }}>
          <Offcanvas.Title className="d-flex">
            <Container
              className="border rounded-circle d-flex justify-content-center align-items-center bg-dark text-white"
              style={{ width: "60px", height: "50px" }}
            >
              <Icon icon={faUser} />
            </Container>
            <Container>
              <p style={{ fontSize: "17px" }}>Filan Fisteku</p>
              <p style={{ fontSize: "14px", marginTop: "-18px" }}>username1</p>
            </Container>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="border" style={{ marginTop: "-15px" }}></div>
          <Link
            to="/"
            onClick={handleToggle}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <h6 className="mt-3">Profile</h6>
          </Link>
          <Link
            to="/admin"
            onClick={handleToggle}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <h6 className="mt-3">Admin</h6>
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <h6 className="mt-3">Log Out</h6>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>

      {/*----------------------------------SECOND NAVBAR */}
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
