import React, {useState} from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LanguageSchema from '../../../validation/LanguageSchema';

function CreateCategory(){
    let navigate = useNavigate();

    const languageTemplate = {
       Lang: ''
    }

    const [language, setLanguage] = useState(languageTemplate);
    const [err, setErr] = useState();

    function handleChange(e){
      const {name, value} = e.target;
      setLanguage({...language, [name]: value});
      setErr();
    }

    async function handleSubmit(e){
        e.preventDefault();

        var apiURL = 'http://localhost:4000/languages/create';
        try {
            const validationResult = LanguageSchema.validate(language);
            if (validationResult.error){
              setErr(validationResult.error.message);
              return
            }
            await axios.post(apiURL, language);
            navigate('/admin/languages');
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
    
            <Icon icon={faBook} style={{fontSize: '70px'}} className=""/>
            <h3 className="mb-3 pt-3">Create Language</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Language"
                name="Lang"
                value={language.Lang}
                onChange={handleChange}
              />
            </div>

            <button className="form-control btn btn-dark w-25 mt-2">
              CREATE
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

export default CreateCategory;