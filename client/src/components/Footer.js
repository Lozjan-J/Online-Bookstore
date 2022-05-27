import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-3">
              <h4 className="mb-4" style={{ color: "#f67549" }}>COMPANY</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non convallis ligula, vel mollis diam. Donec vel finibus arcu.
                Nunc tempus maximus eleifend.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="mb-4" style={{ color: "#f67549" }}>PRODUCTS</h4>
              <p>Providers</p>
              <p>Creativity</p>
              <p>Source</p>
              <p>Other</p>
            </div>
            <div className="col-md-3">
              <h4 className="mb-4" style={{ color: "#f67549" }}>USEFUL LINKS</h4>
              <p>Your Account</p>
              <p>Become Affiliates</p>
              <p>Shipping</p>
              <p>Help</p>
            </div>
            <div className="col-md-3">
              <h4 className="mb-4" style={{ color: "#f67549" }}>CONTACT</h4>
              <p>
                <Icon /> New York, NY 2333, US
              </p>
              <p>
                <Icon /> providers@gmail.com
              </p>
              <p>
                <Icon /> +92 7162371623
              </p>
              <p>
                <Icon /> +01 335 633 144
              </p>
            </div>
          </div>

          <div className="row mt-4 pb-3">
            <div className="col-md-6">
                <p>Copyright @2022 All rights reserved by: <a style={{textDecoration: 'none'}}><strong className="text-warning">The Providers</strong></a></p>
            </div>
            <div className="col-md-5 d-flex justify-content-end">
                <ul className="list-unstyled">
                    <li className="list-inline-item">
                        <a className="text-white btn-sm" href="#" style={{fontSize: '23px'}}>
                            <Icon icon={faFacebook}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-white btn-sm" href="#" style={{fontSize: '23px'}}>
                            <Icon icon={faTwitter}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-white btn-sm" href="#" style={{fontSize: '23px'}}>
                            <Icon icon={faInstagram}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="text-white btn-sm" href="#" style={{fontSize: '23px'}}>
                            <Icon icon={faLinkedin}/>
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
