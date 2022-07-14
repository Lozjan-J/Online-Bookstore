import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookSchema from '../../../validation/BookSchema';

function CreateBook(){
    let navigate = useNavigate();
    const bookTemplate = {
        Name: '',
        Author: '',
        Category: '',
        Language: '',
        Genre: '',
        Price: '',
        Image: '',
    }

    const [book, setBook] = useState(bookTemplate);
    const [languages, setLanguages] = useState();
    const [categories, setCategories] = useState();
    const [genres, setGenres] = useState();
    const [err, setErr] = useState();

    useEffect(() => {
      const getCategories = async () => {
          var apiURL = `http://localhost:4000/categories`
          try {
              const response = await axios.get(apiURL);
              setCategories(response.data);
          } catch(error){
              console.log(error);
          }
      }
      const getLanguages = async () => {
          var apiURL = `http://localhost:4000/languages`
          try {
              const response = await axios.get(apiURL);
              setLanguages(response.data);
          } catch(error){
              console.log(error);
          }
      }
      const getGenres = async () => {
        var apiURL = `http://localhost:4000/genres`
        try {
            const response = await axios.get(apiURL);
            setGenres(response.data);
        } catch(error){
            console.log(error);
        }
    }
      getLanguages();
      getCategories();
      getGenres();
  }, [])

    function handleChange(e){
        if (e.target.name === "Image") { //if the file input triggered this function
            setBook({...book, 'Image': e.target.files[0]});
        } else {
            const {name, value} = e.target;
            setBook({...book, [name]: value});
        }
        setErr();
    }

    async function handleSubmit(e){
        e.preventDefault();

        var apiURL = 'http://localhost:4000/books/create';
        try {
            const validationResult = BookSchema.validate(book);
            if (validationResult.error){
              setErr(validationResult.error.message);
              return
            }

            const fd = new FormData();

            //next we need to append every value for example:
            // fd.append('Name', book.Name)
            // fd.append('Image', book.Image)
            for(var i in book){
                fd.append(i, book[i])
            }

            await axios.post(apiURL, fd);
            navigate('/admin/books');
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
            <h3 className="mb-3 pt-3">Create Book</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Name"
                name="Name"
                value={book.Name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Author"
                name="Author"
                value={book.Author}
                onChange={handleChange}
              />
            </div>
            <div className="form-group w-25 mx-auto py-2 text-start">
            <label>Category</label>
              <select name="Category" value={book.Category} onChange={handleChange} className="form-group w-100 mx-auto py-2">
                {categories && categories.map((category) => {
                  return (
                    <option value={category.Name} key={category._id}>{category.Name}</option>
                  )
                }) }
              </select>
            </div>
            <div className="form-group w-25 mx-auto py-2 text-start">
            <label>Language</label>
              <select name="Language" value={book.Language} onChange={handleChange} className="form-group w-100 mx-auto py-2">
                {languages && languages.map((lang) => {
                  return (
                    <option value={lang.Lang} key={lang._id}>{lang.Lang}</option>
                  )
                }) }
              </select>
            </div>
            <div className="form-group w-25 mx-auto py-2 text-start">
            <label>Genre</label>
              <select name="Genre" value={book.Genre} onChange={handleChange} className="form-group w-100 mx-auto py-2">
                {genres && genres.map((genre) => {
                  return (
                    <option value={genre.Genre} key={genre._id}>{genre.Genre}</option>
                  )
                }) }
              </select>
            </div>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Price"
                name="Price"
                value={book.Price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-25 mx-auto py-2">
                <input name="Image" className="form-control" type="file" id="formFile" onChange={handleChange} />
            </div>
            
            <button className="form-control btn btn-dark w-25 mt-2">
              CREATE
            </button>
            <Link to="/admin/books"
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

export default CreateBook;