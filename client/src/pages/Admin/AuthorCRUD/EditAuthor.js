import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";
import AuthorSchema from '../../../validation/AuthorSchema';

function EditUser(){
    let navigate = useNavigate();
    const authorTemplate = {
        FirstName: '',
        LastName: ''
    }
    const {id} = useParams();
    const [author, setAuthor] = useState(authorTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getAuthor = async () => {
            var apiURL = `http://localhost:4000/authors/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setAuthor(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getAuthor()
    }, [id]) //this is because eslint will warn that ID is an external variable and this useEffect won't run
    //if the id is changed.

    function handleChange(e){
        const {name, value} = e.target;
        const newAuthor = {...author, [name]: value};
        setAuthor(newAuthor);
        setErr('');
    }

    async function handleSubmit(e){
        e.preventDefault();

        const authorObject = {
          FirstName: author.FirstName,
          LastName: author.LastName
        }

        const validationResult = AuthorSchema.validate(authorObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/authors/update/${id}`;
            await axios.post(apiURL, author)
            navigate('/admin/authors')
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
                placeholder="First Name"
                name="FirstName"
                value={author && author.FirstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Last Name"
                name="LastName"
                value={author && author.LastName}
                onChange={handleChange}
              />
            </div>
          
            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/authors"
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