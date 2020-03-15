import React from "react";
import Product from "./Product";
import Title from "./Title";
import Navbar from "./Navbar";
import { ProductConsumer } from "../context";

class ProductList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="py-5">
          <div className="container">
            <Title title="products" />
            <div className="row">
              <ProductConsumer>
                {data => {
                  return data.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
