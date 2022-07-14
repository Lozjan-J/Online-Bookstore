import React, { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlay, faCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState();

  function Next(){
    setPage(2);
  }

  function Back(){
    setPage(1);
  }

  useEffect(() => {
    const getBooks = async () => {
      try {
        var apiURL = `http://localhost:4000/books`;
        const response = await axios.get(apiURL);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#f67549" }}
      >
        <div className="container">
          <div className="row pt-5 pb-3">
            <div className="col-md-6">
              <h1>RESPONSIVE E-COMMERCE WEBSITE</h1>
              <p className="mt-5 w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elit erat, efficitur sit amet odio nec, vestibulum
                fringilla nisi.
              </p>
              <button className="btn btn-primary mt-3">SHOP NOW</button>
              <div className="input-group mt-5 pb-5">
                <input type="text" className="form-control" />
                <div className="input-group-btn">
                  <button className="btn btn-default border border-dark">
                    <Icon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-3 offset-md-2 mb-4">
              <img
                src={books && require(`../../public/uploads/${books[0].Image}`)}
                alt="Random Book"
                className="img-fluid h-100"
              />
            </div>
            <div className="col-3 offset-1 offset-md-0 col-md-1 d-flex justify-content-center align-items-center flex-column">
              <Icon icon={faCircle} className="p-2 opacity-50" />
              <Icon icon={faCircle} className="p-2 opacity-50" />
              <Icon icon={faCircle} className="p-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-6">
              <h1 style={{ color: "#f67549" }}>NEW BOOKS</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elit erat, efficitur sit amet odio nec, vestibulum
                fringilla nisi.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className="btn my-auto" onClick={Back}>
                <Icon
                  icon={faPlay}
                  className="text-white p-2"
                  style={{
                    transform: "rotate(180deg)",
                    backgroundColor: "#f67549",
                  }}
                  
                ></Icon>
              </button>
              <button className="btn my-auto" onClick={Next}>
                <Icon
                  icon={faPlay}
                  className="text-white p-2"
                  style={{ backgroundColor: "#f67549" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {books && (
        <div className="container bg-white mt-3 mb-3">
          
          {
              (page == 1 ? (
                <div className="row justify-content-around">
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[0]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[1]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[2]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[3]} />
                  </div>
                </div>
              ) : (
                <div className="row justify-content-around">
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[4]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[5]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[6]} />
                  </div>
                  <div className="col-6 col-sm-3 col-md-2 my-2">
                    <Card book={books[7]} />
                  </div>
                </div>
              ))
            }
        </div>
      )}
    </>
  );
}

export default Home;
