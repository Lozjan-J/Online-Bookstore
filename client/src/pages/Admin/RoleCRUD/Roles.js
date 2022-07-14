import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";

function Roles() {
  const [roles, setRoles] = useState();

  useEffect(() => {
    const getRoles = async () => {
      try {
        var apiURL = "http://localhost:4000/roles";
        const response = await axios.get(apiURL);
        setRoles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoles();
  }, []);

  async function deleteRole(id) {
    var apiURL = `http://localhost:4000/roles/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this Role?")) {
      try {
        await axios.delete(apiURL);
        setRoles(roles.filter((el) => el._id !== id));
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
          <Link to={"/admin/roles/create"}>
            <button className="btn bg-dark text-white">ADD NEW ROLE</button>
          </Link>
        </div>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Role</th>
              <th style={{ width: "15%" }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {roles &&
              roles.map((role, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{role.Role}</td>
                    <td className="d-flex justify-content-around">
                      <Link to={`/admin/roles/edit/${role._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1"
                        onClick={() => deleteRole(role._id)}
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

export default Roles;
