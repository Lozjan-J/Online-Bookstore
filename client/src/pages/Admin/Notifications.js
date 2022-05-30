import React from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Row } from "react-bootstrap";

function Notifications() {
  return (
    <>
      <AdminHeader />

      <Container className="border border-dark rounded bg-dark my-4">
        <Row className="my-4 px-5 text-white">
          Notifications
        </Row>
      </Container>
    </>
  );
}

export default Notifications;
