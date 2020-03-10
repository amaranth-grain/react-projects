import React from "react";
import Title from "./Title";

class Cart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Title title="Online Cart" />
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
