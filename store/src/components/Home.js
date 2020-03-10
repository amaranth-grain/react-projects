import React from "react";
import Title from "./Title";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Title title="Home" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
