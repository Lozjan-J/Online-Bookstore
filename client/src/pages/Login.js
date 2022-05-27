import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Login(){
    return (
        <>
            <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <form>
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            <Icon icon={faUser} style={{fontSize: '70px'}} className=""/>
            <h3 className="mb-3 pt-3">LOGIN</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="username"
                name="username"
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="password"
                placeholder="password"
                name="password"
              />
            </div>
            <button className="form-control btn btn-dark w-25 mt-2">
                LOGIN
            </button>
            <Link to="/register"
              className="text-white mt-2"
              style={{textDecoration: 'none'}}
            >
              Create Account
            </Link>
            <p style={{color: 'yellow'}}></p>
          </div>
        </form>
      </div>
        </>
    )
}

export default Login;