import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ManageCard(){
    const cardSize = {
        width: "120px",
        height: "90px",
    };

    return (
        <>
            <Col className="col-6 col-sm-4 col-md-3 text-center">
            <Card className="mx-auto my-3 bg-light" style={cardSize}>
              <Link to="/home" className="nav-link text-dark">
                <Card.Body>
                  <Card.Title>
                    <Icon icon={faUser} />
                  </Card.Title>
                  <Card.Text>Users</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </>
    )
}

export default ManageCard;