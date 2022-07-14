import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";

function Categories() {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const getGenres = async () => {
      try {
        var apiURL = "http://localhost:4000/genres";
        const response = await axios.get(apiURL);
        setGenres(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  async function deleteGenre(id) {
    var apiURL = `http://localhost:4000/genres/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this Genre?")) {
      try {
        await axios.delete(apiURL);
        setGenres(genres.filter((el) => el._id !== id));
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
          <Link to={"/admin/genres/create"}>
            <button className="btn bg-dark text-white">ADD NEW GENRE</button>
          </Link>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Genre</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {genres &&
              genres.map((genre, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{genre.Genre}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/genres/edit/${genre._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteGenre(genre._id)}
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
