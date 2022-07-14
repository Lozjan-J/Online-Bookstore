import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";

function Categories() {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    const getAuthors = async () => {
      try {
        var apiURL = "http://localhost:4000/authors";
        const response = await axios.get(apiURL);
        setAuthors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthors();
  }, []);

  async function deleteAuthor(id) {
    var apiURL = `http://localhost:4000/authors/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this Author?")) {
      try {
        await axios.delete(apiURL);
        setAuthors(authors.filter((el) => el._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <AdminHeader />

      <Container>
        <div className="text-white text-center mt-2 mb-3">
          <Link to={"/admin/authors/create"}>
            <button className="btn bg-dark text-white">ADD NEW AUTHOR</button>
          </Link>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {authors &&
              authors.map((author, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{author.Name}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/authors/edit/${author._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteAuthor(author._id)}
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

export default Categories;
