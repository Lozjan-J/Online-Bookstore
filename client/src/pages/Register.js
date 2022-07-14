import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import UserSchema from '../validation/UserSchema'
import axios from "axios";

function Register({setAuth, setProfile}) {
  let navigate = useNavigate()

  const userTemplate = {
    'First Name': '',
    'Last Name': '',
    country: '',
    username: '',
    email: '',
    password: ''
  }

  const [user, setUser] = useState(userTemplate);
  const [err, setErr] = useState('');
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getCountries = async () => {
      var apiURL = `http://localhost:4000/countries`;
      try {
        const response = await axios.get(apiURL);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []); //this is because eslint will warn that ID is an external variable and this useEffect won't run
  //if the id is changed.

  function handleChange(e){
    const {name, value} = e.target;
    const newUser = {...user, [name]: value};
    setUser(newUser);
    setErr('');
  }

  async function handleSubmit(e){
    e.preventDefault();

    const validationResult = await UserSchema.validate(user)
    if (validationResult.error){
      setErr(validationResult.error.message)
      return
    }

    try {
      let apiURL = 'http://localhost:4000/users/create';
      const userObject = {...user, role: 1}
      const response = await axios.post(apiURL, userObject);
      localStorage.setItem('Auth', true) //sets logged in to true in local storage
      setAuth(true); //logged in state

      localStorage.setItem('Profile', JSON.stringify(response.data));
      setProfile(response.data);
      navigate('/')
    } catch(error) {
      setErr(error);
    }
  }

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <form onSubmit={handleSubmit}>
          
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
            <Icon icon={faUser} style={{fontSize: '70px'}} className=""/>
            <h3 className="mb-3 pt-3">REGISTER</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="First Name"
                name="First Name"
                value={user['First Name']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Last Name"
                name="Last Name"
                value={user['Last Name']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 py-2 text-start">
              <label>Country</label>
              <select name="country" value={user.country} onChange={handleChange} className="form-group w-100 mx-auto py-2">
                {countries && countries.map((country) => {
                  return (
                    <option value={country.Country} key={country._id}>{country.Country}</option>
                  )
                }) }
              </select>
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="password"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button className="form-control btn btn-dark w-25 mt-2">
              CREATE ACCOUNT
            </button>
            <Link to="/login"
              className="text-white mt-2"
              style={{textDecoration: 'none'}}
            >
              Login
            </Link>
            <p style={{color: 'yellow'}}>{err}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
