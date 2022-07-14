import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";

import axios from "axios";
import ReactPaginate from "react-paginate";

function Books() {
  const {category} = useParams();

  const [books, setBooks] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const elementsPerPage = 6;
  const pagesVisited = pageNumber * elementsPerPage;

  const displayBooks =
    books &&
    books.slice(pagesVisited, pagesVisited + elementsPerPage).map((book) => {
      return (
        <div key={book._id} className="col-md-3 col-sm-4">
          {
            //assigned key because each book should have a unique key.
          }
          <Card book={book} />
        </div>
      );
    });

  const pageCount = books && Math.ceil(books.length / elementsPerPage);

  useEffect(() => {
    const getBooks = async () => {
      try {
        var apiURL = `http://localhost:4000/books`;
        const response = await axios.get(apiURL);
        setBooks(response.data.filter((book) => book.Category === category));
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [category]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    books && (
      <>
        <div className="container">
          <div className="row my-5">
            {displayBooks}
          </div>
          <div className="row">
            <ReactPaginate
              previousLabel={"Back"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"disabledBtn"}
              activeClassName={"activeBtn"}
            />
          </div>
        </div>
      </>
    )
  );
}

export default Books;
