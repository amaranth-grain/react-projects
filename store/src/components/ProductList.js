import React from "react";
import Product from "./Product";
import Title from "./Title";

class ProductList extends React.Component {
  state = {
    products: []
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="products" />
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
