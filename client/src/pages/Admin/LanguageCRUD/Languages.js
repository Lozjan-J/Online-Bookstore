import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";

function Categories() {
  const [languages, setLanguages] = useState();

  useEffect(() => {
    const getLanguages = async () => {
      try {
        var apiURL = "http://localhost:4000/languages";
        const response = await axios.get(apiURL);
        setLanguages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLanguages();
  }, []);

  async function deleteLanguage(id) {
    var apiURL = `http://localhost:4000/languages/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this Language?")) {
      try {
        await axios.delete(apiURL);
        setLanguages(languages.filter((el) => el._id !== id));
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
          <Link to={"/admin/languages/create"}>
            <button className="btn bg-dark text-white">ADD NEW LANGUAGE</button>
          </Link>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {languages &&
              languages.map((language, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{language.Lang}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/languages/edit/${language._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteLanguage(language._id)}
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
