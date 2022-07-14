import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const getCountries = async () => {
      try {
        var apiURL = "http://localhost:4000/countries";
        const response = await axios.get(apiURL);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  async function deleteCountry(id) {
    var apiURL = `http://localhost:4000/countries/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this Country?")) {
      try {
        await axios.delete(apiURL);
        setCountries(countries.filter((el) => el._id !== id));
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
          <Link to={"/admin/countries/create"}>
            <button className="btn bg-dark text-white">ADD NEW COUNTRY</button>
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
            {countries &&
              countries.map((country, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{country.Country}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/countries/edit/${country._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteCountry(country._id)}
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

export default Countries;
