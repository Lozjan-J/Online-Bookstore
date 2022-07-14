import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";
import LanguageSchema from '../../../validation/LanguageSchema';

function EditUser(){
    let navigate = useNavigate();
    const languageTemplate = {
        Lang: ''
    }
    const {id} = useParams();
    const [language, setLanguage] = useState(languageTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getLanguage = async () => {
            var apiURL = `http://localhost:4000/languages/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setLanguage(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getLanguage()
    }, [id]) //this is because eslint will warn that ID is an external variable and this useEffect won't run
    //if the id is changed.

    function handleChange(e){
        const {name, value} = e.target;
        const newLanguage = {...language, [name]: value};
        setLanguage(newLanguage);
        setErr('');
    }

    async function handleSubmit(e){
        e.preventDefault();

        const languageObject = {
          Lang: language.Lang
        }

        const validationResult = LanguageSchema.validate(languageObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/languages/update/${id}`;
            await axios.post(apiURL, language)
            navigate('/admin/languages')
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
                placeholder="Language"
                name="Lang"
                value={language && language.Lang}
                onChange={handleChange}
              />
            </div>

            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/languages"
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