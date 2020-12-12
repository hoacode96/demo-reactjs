import * as React from "react";
import { Breadcrumb, Button, Col, Container, Nav, Row } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";

const BootStrapTest = () => {
  return (
    <BrowserRouter>
   
    <Container>
      <Row>
        <Col>
          <Nav variant="tabs">
            <Nav.Item>
              <Link className="nav-link active" to='/breadcrumb'>Breadcrumb</Link>
           
            </Nav.Item>
            <Nav.Item>
            <Link className="nav-link active" to='/modal'>Modal</Link>
            </Nav.Item>
            <Nav.Item>
            <Link className="nav-link active" to='/overlay'>overlay</Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <h2>Info</h2>
      </Row>
    </Container>
    </BrowserRouter>
  );
};

export default BootStrapTest;
