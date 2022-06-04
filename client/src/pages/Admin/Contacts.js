import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Contacts() {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    const getContacts = async () => {
      try {
        var apiURL = "http://localhost:4000/contact";
        const response = await axios.get(apiURL);
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  async function deleteContact(id) {
    var apiURL = `http://localhost:4000/contact/delete/${id}`;
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(apiURL);
        setContacts(contacts.filter((contact) => contact._id !== id));
      } catch (error) {
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
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{contact.username}</td>
                    <td>{contact.email}</td>
                    <td>{contact.msg}</td>
                    <td className="text-center">
                      <Link to={`/admin/contacts/edit/${contact._id}`}>
                        <button className="btn btn-primary my-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger my-1 mx-2"
                        onClick={() => deleteContact(contact._id)}
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

export default Contacts;
