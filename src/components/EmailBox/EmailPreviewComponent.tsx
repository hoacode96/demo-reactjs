import * as React from "react";
import { Table } from "react-bootstrap";
import Moment from "react-moment";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import EmailDetailComponent from "./EmailDetailComponent";

const EmailPreview = ({ passedData }: any) => {
  let { topicId }: any = useParams();   
  let { path, url } = useRouteMatch();
  debugger
  return (
    <div className="table-responsive">
      <Router>
        <Table>
          <thead className="thead-dark">
            <tr>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {passedData
              .filter((ele: any) => {
                return ele.folder === topicId;
              })
              .map((ele2: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`${url}/${ele2._id}`}>{ele2.from}</Link>
                    </td>
                    <td>{ele2.subject}</td>
                    <td>
                      <Moment format="DD-MM-YYYY">{ele2.date}</Moment>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Route path={`${path}/:mailId`}>
          <EmailDetailComponent passedData={passedData} />
        </Route>
      </Router>
    </div>
  );
};

export default EmailPreview;
