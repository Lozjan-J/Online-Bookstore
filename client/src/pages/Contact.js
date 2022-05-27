import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor: '#f67549'}}>
        <div className="container">
          <div className="row py-5">
            <div className="col-5 offset-1 text-center my-auto">
                <Icon icon={faPhone} className="mx-auto" style={{fontSize: '200px'}}/>
            </div>
            <div className="col-5">
              <div className="container">
                <h3 className="pb-4">CONTACT US</h3>
                <div className="form-group">
                  <input
                    className="form-control rounded mt-3"
                    type="text"
                    placeholder="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control rounded mt-3"
                    type="text"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control mt-3"
                    rows="5"
                    placeholder="Write your message..."
                    style={{ height: 'auto'}}
                  ></textarea>
                </div>
                <button className="form-control btn btn-dark mt-3">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
