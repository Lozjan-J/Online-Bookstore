import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../components/Admin/Header";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      try {
        var apiURL = "http://localhost:4000/categories";
        const response = await axios.get(apiURL);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  async function deleteCategory(id) {
    var apiURL = `http://localhost:4000/categories/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(apiURL);
        setCategories(categories.filter((el) => el._id !== id));
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
          <Link to={"/admin/categories/create"}>
            <button className="btn bg-dark text-white">ADD NEW CATEGORY</button>
          </Link>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{category.Name}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/categories/edit/${category._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteCategory(category._id)}
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
