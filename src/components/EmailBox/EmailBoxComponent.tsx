import * as React from "react";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import EmailPreview from "./EmailPreviewComponent";

const EmailBoxComponent = ({ passedData }: any) => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Nav className="col-md-1 px-0 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky"></div>
          <Nav.Item className="px-4 py-2">
            <Nav.Link as={Link}to={`${url}/inbox`}>Inbox</Nav.Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/finance`}>Finance</Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/travel`}>Travel</Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/personal`}>Personal</Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/spam`}>Spam</Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/draft`}>Drafts</Link>
          </Nav.Item>
          <Nav.Item className="px-4 py-2">
            <Link to={`${url}/sent`}>Sent</Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path={`${path}/:topicId`}>
            <EmailPreview passedData={passedData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default EmailBoxComponent;
