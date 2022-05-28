import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import ContactSchema from '../validation/ContactSchema';
import axios from "axios";

function Contact() {
  const navigate = useNavigate();

  const contactTemplate = {
    username: "",
    email: "",
    msg: "",
  };
  const [contact, setContact] = useState(contactTemplate);
  const [err, setErr] = useState("");

  function changeHandler(e) {
    const { name, value } = e.target;
    const newContactObject = { ...contact, [name]: value };
    setContact(newContactObject);
    setErr("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationResult = ContactSchema.validate(contact)
    if (validationResult.error){
      setErr(validationResult.error.message)
      return
    }

    try {
      let apiURL = "http://localhost:4000/contact/create";
      await axios.post(apiURL, contact)
      console.log('Successful')
      navigate('/')
    } catch(error) {
      setErr(error)
    }
  }

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#f67549" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-5 offset-1 text-center my-auto">
              <Icon
                icon={faPhone}
                className="mx-auto"
                style={{ fontSize: "200px" }}
              />
            </div>
            <div className="col-sm-5 my-5">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <h3 className="pb-4">CONTACT US</h3>
                  <div className="form-group">
                    <input
                      className="form-control rounded mt-3"
                      type="text"
                      placeholder="username"
                      name="username"
                      onChange={changeHandler}
                      value={contact.username}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control rounded mt-3"
                      type="text"
                      placeholder="email"
                      name="email"
                      onChange={changeHandler}
                      value={contact.email}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control mt-3"
                      rows="5"
                      placeholder="Write your message..."
                      style={{ height: "auto" }}
                      name="msg"
                      onChange={changeHandler}
                      value={contact.msg}
                    ></textarea>
                  </div>
                  <button className="form-control btn btn-dark mt-3">
                    SEND
                  </button>
                  <p className="text-center mt-3" style={{color: 'yellow'}}>{err}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
