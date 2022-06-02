import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import AdminHeader from "../../components/Admin/Header";
import { useParams } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        var apiURL = "http://localhost:4000/users";
        const response = await axios.get(apiURL);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  async function deleteUser(id){
    var apiURL = `http://localhost:4000/users/delete/${id}`;
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(apiURL);
        setUsers(users.filter(el => el._id !== id));
      } catch(error) {
        console.log(error)
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th style={{width: '15%'}}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{user["First Name"]}</td>
                    <td>{user["Last Name"]}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td className="d-flex justify-content-around">
                        <button className="btn btn-primary my-1">Edit</button>
                        <button className="btn btn-danger my-1" onClick={() => deleteUser(user._id)}>Delete</button>
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

export default Users;
