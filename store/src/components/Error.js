import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";

class Error extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-5">404 error</h1>

              <h3>
                The requested URL {this.props.location.pathname} was not found
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
