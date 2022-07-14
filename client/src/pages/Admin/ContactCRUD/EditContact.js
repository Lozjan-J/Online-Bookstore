import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../components/Admin/Header";
import { Link } from "react-router-dom";
import ContactSchema from '../../../validation/ContactSchema';
import { faContactCard } from "@fortawesome/free-regular-svg-icons";

function EditContact(){
    let navigate = useNavigate();
    const contactTemplate = {
      username: "",
      email: "",
      msg: "",
    };
    const {id} = useParams();
    const [contact, setContact] = useState(contactTemplate);
    const [err, setErr] = useState();

    useEffect(() => {
        const getContact = async () => {
            var apiURL = `http://localhost:4000/contact/get/${id}`
            try {
                const response = await axios.get(apiURL);
                setContact(response.data);
            } catch(error){
                console.log(error);
            }
        }
        getContact()
    }, [id]) //this is because eslint will warn that ID is an external variable and this useEffect won't run
    //if the id is changed.

    function handleChange(e){
        const {name, value} = e.target;
        const newContact = {...contact, [name]: value};
        setContact(newContact);
        setErr('');
    }

    async function handleSubmit(e){
        e.preventDefault();

        const contactObject = {
          username: contact.username,
          email: contact.email,
           msg: contact.msg,
        }

        const validationResult = ContactSchema.validate(contactObject);
        if (validationResult.error){
            setErr(validationResult.error.message);
            return
        }
        try {
            let apiURL = `http://localhost:4000/contact/update/${id}`;
            await axios.post(apiURL, contact)
            navigate('/admin/contact')
          } catch(error) {
            setErr(error);
          }
    }

    return (
        <>
        <AdminHeader />

        <div
        className="container-fluid py-5"
        style={{backgroundColor: '#f67549'}}
      >
        <form onSubmit={handleSubmit}>
          
          <div className="mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
            <h3 className="mb-3 pt-3">EDIT</h3>
            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Username"
                name="username"
                value={contact && contact.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-25 mx-auto py-2">
              <input
                className="form-control rounded"
                type="text"
                placeholder="Email"
                name="email"
                value={contact && contact.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group w-25 mx-auto py-2">
            <textarea
                    className="form-control rounded mt-3"
                    rows="5"
                    placeholder="Write your message..."
                    style={{ height: "auto" }}
                    name="msg"
                    value={contact && contact.msg}
                    onChange={handleChange}
            ></textarea>
            </div>
          
            <button className="form-control btn btn-dark w-25 mt-2">
              UPDATE
            </button>
            <Link to="/admin/contacts"
              className="text-white mt-2"
              style={{textDecoration: 'none'}}
            >
              Back
            </Link>
            <p style={{color: 'yellow'}}>{err}</p>
          </div>
        </form>
      </div>
        </>
    )
}

export default EditContact;