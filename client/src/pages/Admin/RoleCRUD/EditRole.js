import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";
import RoleSchema from '../../../validation/RoleSchema';

function EditCountry(){
    let navigate = useNavigate();
    const roleTemplate = {
        Role: ''
    }
    const {id} = useParams();
    const [role, setRole] = useState(roleTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getRole = async () => {
            var apiURL = `http://localhost:4000/roles/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setRole(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getRole()
    }, [id]) //this is because eslint will warn that ID is an external variable and this useEffect won't run
    //if the id is changed.

    function handleChange(e){
        const {name, value} = e.target;
        const newRole = {...role, [name]: value};
        setRole(newRole);
        setErr('');
    }

    async function handleSubmit(e){
        e.preventDefault();

        const roleObject = {
          Role: role.Role
        }

        const validationResult = RoleSchema.validate(roleObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/roles/update/${id}`;
            await axios.post(apiURL, role)
            navigate('/admin/roles')
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
            <h3 className="mb-3 pt-3">EDIT</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Role"
                name="Role"
                value={role && role.Role}
                onChange={handleChange}
              />
            </div>

            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/roles"
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

export default EditCountry;