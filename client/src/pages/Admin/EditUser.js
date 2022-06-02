import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../components/Admin/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserSchema from '../../validation/UserSchema';

function EditUser(){
    let navigate = useNavigate();
    const userTemplate = {
        ['First Name']: '',
        ['Last Name']: '',
        username: '',
        email: '',
        password: ''
    }
    const {id} = useParams();
    const [user, setUser] = useState(userTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getUser = async () => {
            var apiURL = `http://localhost:4000/users/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setUser(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getUser()
    }, [])

    function handleChange(e){
        const {name, value} = e.target;
        const newUser = {...user, [name]: value};
        setUser(newUser);
    }

    async function handleSubmit(e){
        e.preventDefault();
        
        const userObject = { 
            ['First Name']: user["First Name"],  //create a new user object without ID because JOI doesn't verify the ID
            ['Last Name']: user['Last Name'],
            username: user.username,
            email: user.email,
            password: user.password
        }
        const validationResult = UserSchema.validate(userObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/users/update/${id}`;
            await axios.post(apiURL, user)
            navigate('/admin/users')
          } catch(error) {
            setErr(error);
          }
    }

    return (
        <>
        <AdminHeader />

        <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <form onSubmit={handleSubmit}>
          
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
            <Icon icon={faUser} style={{fontSize: '70px'}} className=""/>
            <h3 className="mb-3 pt-3">EDIT</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="First Name"
                name="First Name"
                value={user && user['First Name']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Last Name"
                name="Last Name"
                value={user && user['Last Name']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="username"
                name="username"
                value={user && user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="email"
                name="email"
                value={user && user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="password"
                placeholder="password"
                name="password"
                value={user && user.password}
                onChange={handleChange}
              />
            </div>
            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/users"
              className="text-white mt-2"
              style={{textDecoration: 'none'}}
            >
              Back
            </Link>
            <p style={{color: 'yellow'}}>{err}</p>
          </div>
        </form>
      </div>
        </>
    )
}

export default EditUser;