import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/terms" className="nav-link text-white">
                TERMS
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                WISH LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                CHECKOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                TOTAL: 300$
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container py-3">
          <Link
            to="/"
            className="border"
            style={{ display: "contents" }}
          >
            <img src={Logo} style={{ width: "8%" }} />
          </Link>

          <ul className="navbar-nav ml-auto text-left">
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                TEXTBOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                AUDIOBOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                MAGAZINES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link text-dark">
                KIDS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
