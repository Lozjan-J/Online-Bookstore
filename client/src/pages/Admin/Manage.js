import React from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Row } from "react-bootstrap";
import ManageCard from "../../components/Admin/ManageCard";

function Manage() {

  return (
    <>
      <AdminHeader />

      <Container className="border border-dark rounded bg-dark my-4">
        <Row className="my-4 px-5">
          <ManageCard />
          <ManageCard />
          <ManageCard />
          <ManageCard />
        </Row>
      </Container>
    </>
  );
}

export default Manage;
