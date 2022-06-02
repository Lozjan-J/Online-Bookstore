import React, {useEffect} from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Manage() {
  const cardSize = {
    width: "120px",
    height: "90px",
  };

  return (
    <>
      <AdminHeader />

      <Container className="border border-dark rounded bg-dark my-4">
        <Row className="my-4 px-5">

          <Col className="col-6 col-sm-4 col-md-3 text-center">
            <Card className="mx-auto my-3 bg-light" style={cardSize}>
              <Link to="/admin/users" className="nav-link text-dark">
                <Card.Body>
                  <Card.Title>
                    <Icon icon={faUser} />
                  </Card.Title>
                  <Card.Text>Users</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Manage;
