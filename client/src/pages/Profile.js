import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function Profile() {
  const userTemplate = {
    "First Name": "",
    "Last Name": "",
    username: "",
    email: "",
    password: "",
  };

  const { id } = useParams();
  const [user, setUser] = useState(userTemplate);
  const [err, setErr] = useState();

  useEffect(() => {
    const getUser = async () => {
      var apiURL = `http://localhost:4000/users/get/${id}`;
      try {
        const response = await axios.get(apiURL);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id]); //this is because eslint will warn that ID is an external variable and this useEffect won't run
  //if the id is changed.

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f67549" }}
      >
        <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
          <Icon icon={faUser} style={{ fontSize: "70px" }} className="" />

          <h3 className="mb-3 pt-3">Profile</h3>

          <div className="form-group w-25 mx-auto py-2">
            <input
              disabled
              className="form-control rounded"
              type="text"
              placeholder="First Name"
              name="First Name"
              value={user && user["First Name"]}
            />
          </div>
          <div className="form-group w-25 mx-auto py-2">
            <input
              disabled
              className="form-control rounded"
              type="text"
              placeholder="Last Name"
              name="Last Name"
              value={user && user["Last Name"]}
            />
          </div>
          <div className="form-group w-25 mx-auto py-2">
            <input
              disabled
              className="form-control rounded"
              type="text"
              placeholder="username"
              name="username"
              value={user && user.username}
            />
          </div>
          <div className="form-group w-25 mx-auto py-2">
            <input
              disabled
              className="form-control rounded"
              type="text"
              placeholder="email"
              name="email"
              value={user && user.email}
            />
          </div>

          <Link
            to="/"
            className="text-white mt-2"
            style={{ textDecoration: "none" }}
          >
            Back
          </Link>
          <p style={{ color: "yellow" }}>{err}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
