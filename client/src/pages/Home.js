import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Book1 from "../assets/Book1.jpg";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#f67549" }}
      >
        <div className="container">
          <div className="row pt-5 pb-3">
            <div className="col-md-6">
              <h1>RESPONSIVE E-COMMERCE WEBSITE</h1>
              <p className="mt-5 w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elit erat, efficitur sit amet odio nec, vestibulum
                fringilla nisi.
              </p>
              <button className="btn btn-primary mt-3">SHOP NOW</button>
              <div className="input-group mt-5 pb-5">
                <input type="text" className="form-control" />
                <div className="input-group-btn">
                  <button className="btn btn-default border border-dark">
                    <Icon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-3 offset-md-2 border">
              <img src={Book1} className="img-fluid h-100" />
            </div>
            <div className="col-3 offset-1 offset-md-0 col-md-1 border">
              img
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-6 border">
              <h1 style={{ backgroundColor: "#f67549" }}>NEW BOOKS</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elit erat, efficitur sit amet odio nec, vestibulum
                fringilla nisi.
              </p>
            </div>
            <div className="col-md-6 border d-flex justify-content-end">ASD</div>
          </div>
        </div>
      </div>

      <div className="container bg-white mt-3 mb-3">
        <div className="row justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </>
  );
}

export default Home;
