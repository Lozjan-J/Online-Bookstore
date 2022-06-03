import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlay, faCircle } from "@fortawesome/free-solid-svg-icons";
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
            <div className="col-7 col-md-3 offset-md-2 mb-4">
              <img src={Book1} className="img-fluid h-100" />
            </div>
            <div className="col-3 offset-1 offset-md-0 col-md-1 d-flex justify-content-center align-items-center flex-column">
              <Icon icon={faCircle} className="p-2 opacity-50"/>
              <Icon icon={faCircle} className="p-2 opacity-50"/>
              <Icon icon={faCircle} className="p-2"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-6">
              <h1 style={{ color: "#f67549" }}>NEW BOOKS</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elit erat, efficitur sit amet odio nec, vestibulum
                fringilla nisi.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <a href="#" className="my-auto" onClick={Next}><Icon icon={faPlay} className="text-white p-2" style={{transform: 'rotate(180deg)', backgroundColor: '#f67549'}}></Icon></a>
              <a href="#" className="my-auto mx-2"><Icon icon={faPlay} className="text-white p-2" style={{backgroundColor: '#f67549'}}/></a>        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
