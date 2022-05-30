import React from 'react'
import AdminHeader from '../../components/Admin/Header'
import { Container } from 'react-bootstrap';

function Admin(){
    return (
        <>
        <AdminHeader/>
        
        <Container className="border border-dark mt-3">
            Dashboard
        </Container>
        </>
    )
}

export default Admin;