import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends React.Component {
  getCartLabel = () => {
    let inCartLabel = (
      <p className="text-capitalize mb-0" disabled>
        In cart
      </p>
    );
    let icon = <i className="fas fa-cart-plus" />;
    return this.props.product.inCart ? inCartLabel : icon;
  };

  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductCard className="col-9 mx-auto col-md-6 col-lg-4 my-4">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("Image clicked!")}
          >
            <Link to="/details">
              <img src={img} alt="Product Image" className="card-img-top" />
            </Link>
          </div>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-capitalize">{title}</p>
            <h3 className="text-blue font-italic mb-0 align-self-center">
              <span className="mr-1">$</span>
              {price}
            </h3>
          </div>
          <div className="card-footer text-center">
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={() => console.log("Item added to cart")}
            >
              <p className="text-uppercase mb-0 p-2" disabled>
                {inCart ? "Already in cart" : "Add to cart"}
              </p>
            </button>
          </div>
        </div>
      </ProductCard>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductCard = styled.div`
  .card {
    border-color: transparent;
    transiton: all 1s linear;
  }
  .card-footer {
    min-height: 15vh;
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid grey;
      box-shadow: 2px 2px 5px 0px grey;
    }
  }
  .cart-btn {
    width: 80%;
    border: none;
    background-color: var(--tintedGrey);
    transition: all 0.4s ease-in-out;
  }
  .cart-btn:hover {
    background-color: var(--darkGreen);
    color: white;
  }
`;

export default Product;
