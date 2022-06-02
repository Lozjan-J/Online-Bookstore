import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LoginSchema from '../validation/LoginSchema';
import axios from 'axios';

function Login({setAuth}){
    let navigate = useNavigate();

    const loginTemplate = {
      username: '',
      password: ''
    }
    const [user, setUser] = useState(loginTemplate)
    const [err, setErr] = useState('')

    function changeHandler(e){
      const {name, value} = e.target;
      const newUser = {...user, [name]: value};
      setUser(newUser);
      setErr('')
    }

    async function login(e){
      e.preventDefault()

      const validationResult = LoginSchema.validate(user);
      if (validationResult.error) {
        setErr(validationResult.error.message);
        return 
      }
      
      try {
        var apiURL = 'http://localhost:4000/users/login';
        const response = await axios.post(apiURL, user);
        if (!response.data) {
          setErr('Invalid username/password');
          return;
        }
        localStorage.setItem('Auth', true)
        setAuth(true);
        navigate('/');
      } catch(error){
        setErr(error)
      }
    }

    return (
        <>
            <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <form onSubmit={login}>
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            <Icon icon={faUser} style={{fontSize: '70px'}} className=""/>
            <h3 className="mb-3 pt-3">LOGIN</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="username"
                name="username"
                value={user.username}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="password"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={changeHandler}
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
            <p style={{color: 'yellow'}}>{err}</p>
          </div>
        </form>
      </div>
        </>
    )
}

export default Login;