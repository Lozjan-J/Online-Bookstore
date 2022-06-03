import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
    const [books, setBooks] = useState();

    useEffect(() => {
        const getBooks = async () => {
            try {
                var apiURL = 'http://localhost:4000/books';
                const response = await axios.get(apiURL);
                setBooks(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        getBooks();
    }, [])

    async function deleteBook(id) {
        var apiURL = `http://localhost:4000/books/delete/${id}`;
        if (window.confirm('Are you sure you want to delete this book?')){
            try {
                await axios.delete(apiURL);
                setBooks(books.filter(book => book._id !== id));
            } catch(error){
                console.log(error);
            }
        }
    }

  return (
    <>
      <AdminHeader />

      <Container>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Author</th>
              <th>Price</th>
              <th>Image</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{book.Name}</td>
                    <td>{book.Author}</td>
                    <td>{book.Price}</td>
                    <td>{book.Image}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/books/edit/${book._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteBook(book._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Books;
