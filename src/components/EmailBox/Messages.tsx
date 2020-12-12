import * as React from "react";
import EmailBoxComponent from "./EmailBoxComponent";

const Messages = ({ passedData }: any) => {
  return (
    <div>
      <EmailBoxComponent passedData={passedData} />
    </div>
  );
};

export default Messages;
