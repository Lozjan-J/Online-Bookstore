import React, { useState, useEffect } from "react";
import AdminHeader from "../../components/Admin/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faDollar } from "@fortawesome/free-solid-svg-icons";

import BarChart from "./BarChart";
import PieChart from "./PieChart";

import axios from "axios";

function Admin() {

  const [users, setUsers] = useState()
  const [books, setBooks] = useState()

  useEffect(() => {
    const getUsers = async () => {
      try {
        var apiURL = `http://localhost:4000/users`;
        const response = await axios.get(apiURL);
        setUsers(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    const getBooks = async () => {
      try {
        var apiURL = `http://localhost:4000/books`;
        const response = await axios.get(apiURL);
        setBooks(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
    getBooks();
  }, []);

  return (
    <>
      <AdminHeader/>

      <Container className="border border-dark rounded bg-dark my-4">
        <Row className="py-5 px-5 text-white">
          <Col className="col-4">
            <Card className="bg-info">
              <Card.Body>
                <Card.Title>Sign Ups</Card.Title>
                <Row>
                    <Col className="text-end">
                        <h5>114</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        <Icon icon={faUser} />
                    </Col>
                    <Col className="text-end">
                        +25% from last month
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-4">
            <Card className="bg-success">
              <Card.Body>
                <Card.Title>Revenue</Card.Title>
                <Row>
                    <Col className="text-end">
                        <h5>$25.500</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        <Icon icon={faDollar} />
                    </Col>
                    <Col className="text-end">
                        +17.5% from last month
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-4">
            <Card className="bg-danger">
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <Row>
                    <Col className="text-end">
                        <h5>76</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2">
                        <Icon icon={faShoppingCart} />
                    </Col>
                    <Col className="text-end">
                        +13 from last month
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ------------------------CHARTS-------------- */}

        <Row className="border bg-dark my-4 mx-5">
            <Col className="col-7 border text-white">
                <BarChart users={users} books={books} />
            </Col>
            <Col className="col-5 border text-white">
                <PieChart users={users} books={books} />
            </Col>
        </Row>

      </Container>
    </>
  );
}

export default Admin;
