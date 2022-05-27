import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <img className="img-fluid" src="#" />
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="container">
                <h3>KNOW MORE ABOUT US</h3>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adispeif elit. Sed non
                  libero consectetur,blandit mauris eget. Lorem ipsum dolor sit
                  amet, consectetur adispeif elit. Sed non libero
                  consectetur,blandit mauris eget.
                </p>
                <div className="row justify-content-between pt-3">
                  <div className="col-3 col-sm-3 rounded bg-light text-center">
                    <Icon icon={faPeopleGroup} className="pt-3" style={{fontSize: '30px'}} />
                    <h4 className="">CLIENTS</h4>
                    <h6>300</h6>
                  </div>
                  <div className="col-3 col-sm-3 rounded bg-light text-center">
                    <Icon icon={faPeopleGroup} className="pt-3" style={{fontSize: '30px'}} />
                    <h4 className="">SALES</h4>
                    <h6>450</h6>
                  </div>
                  <div className="col-3 col-sm-3 rounded bg-light text-center">
                    <Icon icon={faPeopleGroup} className="pt-3" style={{fontSize: '30px'}} />
                    <h4 className="">YEARS</h4>
                    <h6>2</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
