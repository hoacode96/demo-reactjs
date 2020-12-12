import * as React from "react";
import { Button } from "react-bootstrap";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
const EmailDetailComponent = ({ passedData }: any) => {
  let { mailId }: any = useParams();
  console.log(passedData)
  return (
    <div
      
    >
     
      
      <div>
        {passedData
          .filter((ele: any) => {
            return ele._id === mailId;
          })
          .map((ele2: any,index:number) => {
            return (
              <div key={index}>
                <div>
                  <h4>{ele2.subject}</h4>
                  <p>{ele2.from + " => " + ele2.to}</p>
                  <p>
                    <Moment format="DD-MM-YYYY">{ele2.date}</Moment>
                  </p>
                  <Button variant="btn btn-outline-primary">Reply</Button>{" "}
                  <Button variant="btn btn-outline-info">Forward</Button>{" "}
                  <Button variant="btn btn-outline-danger">Delete</Button>
                </div>
                <div>
                  <p style={{whiteSpace:'pre-line'}}>{`${ele2.body}`}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EmailDetailComponent;
