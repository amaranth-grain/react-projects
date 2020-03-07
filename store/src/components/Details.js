import React from "react";
import { ProductConsumer } from "../context";
import { ButtonRounded } from "./Button";
import { Link } from "react-router-dom";

class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
          const {
            id,
            title,
            img,
            price,
            artist,
            info,
            inCart
          } = data.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div classsName="row">
                <div className="col-10 mx-auto text-center text-slanted text-capitalize my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-7 my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-5 my-3 text-capitalize">
                  <h3>{title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Artist: <span className="text-capitalise">{artist}</span>
                  </h5>
                  <h4 className="my-3">${price}</h4>
                  <p className="text-capitalize lead text-muted font-weight-bold mt-2 mb-4">
                    {info}
                  </p>
                  {/* buttons */}
                  <Link to="/">
                    <ButtonRounded>Back to Products</ButtonRounded>
                  </Link>
                  <Link to="/cart">
                    <ButtonRounded>Add To Cart</ButtonRounded>
                  </Link>
                  {/* end of buttons */}
                </div>
                {/* product text */}
              </div>
              {/* end of product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
