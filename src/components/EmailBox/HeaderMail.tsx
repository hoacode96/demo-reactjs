import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import dataUser from "../../data/messages.json";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Preferences from "./Preferences";

const HeaderMail = () => {
  const tempData = [
    {
      folder: "",
      body: "",
      subject: "",
      from: "",
      to: "",
      date: "",
      senderName: { last: "", first: "" },
      corpus: "",
      _id: "",
    },
  ];
  const [filterData, setFilterData] = React.useState(tempData);
  const handleSelect = async (e: any) => {
    await setFilterData(
      dataUser.filter((ele) => {
        return ele.to === e.target.value;
      })
    );
  };

  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item className="px-3 py-2">
                <Link to="/messages">Messages</Link>
              </Nav.Item>
              <Nav.Item className="px-3 py-2 ">
                <Link to="/contacts">Contacts</Link>
              </Nav.Item>
              <Nav.Item className="px-3 py-2">
                <Link to="/preferences">Preferences</Link>
              </Nav.Item>
            </Nav>
            <Form inline>
              <Form.Control onChange={handleSelect} as="select" custom>
                <option>select user</option>
                <option>devguy@angular.dev</option>
                <option>myself@angular.dev</option>
                <option>devgal@angular.dev</option>
              </Form.Control>
              <Button variant="outline-primary">Home</Button>{" "}
              <Button variant="outline-success">New Message</Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/messages">
            <Messages passedData={filterData} /> 
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default HeaderMail;
