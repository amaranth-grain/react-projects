import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-10 mx-auto my-1 text-center text-title">
          <h3 className="text-capitalize font-weight-bold text-title">
            {this.props.title}
          </h3>
        </div>
      </div>
    );
  }
}

export default Title;