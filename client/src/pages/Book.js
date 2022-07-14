import React, { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Book() {
  let navigate = useNavigate();
  const bookTemplate = {
    Name: "",
    Author: "",
    Category: "",
    Language: "",
    Genre: "",
    Price: "",
    Image: "",
  };

  const { id } = useParams();
  const [book, setBook] = useState(bookTemplate);
  const [err, setErr] = useState();

  useEffect(() => {
    const getBook = async () => {
      try {
        var apiURL = `http://localhost:4000/books/get/${id}`;
        const response = await axios.get(apiURL);
        setBook(response.data);
      } catch (error) {
        setErr(error);
      }
    };
    getBook();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    //var apiURL = `http://localhost:4000/books/update/${id}`;
    try {
      console.log(book);
    } catch (error) {
      setErr(error);
    }
  }

  return (
    book.Image && (
      <>
        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "#f67549" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex flex-column justify-center align-items-center">
                <Icon icon={faBook} style={{ fontSize: "70px" }} />
                <h3 className="mb-3 pt-3">Checkout</h3>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Name</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={book.Name}
                  />
                </div>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Author</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Author"
                    name="Author"
                    value={book.Author}
                  />
                </div>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Category</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Category"
                    name="Category"
                    value={book.Category}
                  />
                </div>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Language</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Language"
                    name="Language"
                    value={book.Language}
                  />
                </div>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Genre</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Genre"
                    name="Genre"
                    value={book.Genre}
                  />
                </div>
                <div className="form-group w-50 mx-auto py-2">
                  <label>Price</label>
                  <input
                    disabled
                    className="form-control rounded"
                    type="text"
                    placeholder="Price"
                    name="Price"
                    value={book.Price}
                  />
                </div>

                <button className="form-control btn btn-dark w-25 mt-2">
                  BUY
                </button>
                <Link
                  to={`/books/${book.Category}`}
                  className="text-white mt-2"
                  style={{ textDecoration: "none" }}
                >
                  Back
                </Link>
                <p style={{ color: "yellow" }}>{err}</p>
              </div>

              <div className="col-sm-6 d-flex flex-column my-auto justify-center align-items-center">
                <img
                  src={require(`../../public/uploads/${book.Image}`)}
                  alt={book.Name}
                  style={{ width: "300px", height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Book;
