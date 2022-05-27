import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                TERMS
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                WISH LIST
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/login">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                CHECKOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                TOTAL: 300$
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container py-3">
          <a className="border" href="/" style={{display: 'contents'}}>
            <img
              src="#"
              style={{width: '8%'}}
            />
          </a>
          <ul className="navbar-nav ml-auto text-left">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">
                BOOKS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">
                TEXTBOOKS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">
                AUDIOBOOKS
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">
                MAGAZINES
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark">
                KIDS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
