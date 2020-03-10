import React from "react";
import Title from "./Title";

class Error extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Title title="Page Not Found" />
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
