import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";
import CategorySchema from '../../../validation/CategorySchema';

function EditUser(){
    let navigate = useNavigate();
    const categoryTemplate = {
        Name: ''
    }
    const {id} = useParams();
    const [category, setCategory] = useState(categoryTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getCategory = async () => {
            var apiURL = `http://localhost:4000/categories/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setCategory(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getCategory()
    }, [id]) //this is because eslint will warn that ID is an external variable and this useEffect won't run
    //if the id is changed.

    function handleChange(e){
        const {name, value} = e.target;
        const newCategory = {...category, [name]: value};
        setCategory(newCategory);
        setErr('');
    }

    async function handleSubmit(e){
        e.preventDefault();

        const categoryObject = {
          Name: category.Name
        }

        const validationResult = CategorySchema.validate(categoryObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/categories/update/${id}`;
            await axios.post(apiURL, category)
            navigate('/admin/categories')
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
                placeholder="Name"
                name="Name"
                value={category && category.Name}
                onChange={handleChange}
              />
            </div>
          
            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/categories"
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