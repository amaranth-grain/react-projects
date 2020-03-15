import React from "react";
import Title from "../Title";
import Navbar from "../Navbar";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../../context";

class Cart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section>
          <ProductConsumer>
            {data => {
              const { cart } = data;
              if (cart.length > 0) {
                return (
                  <React.Fragment>
                    <Title title="your cart" />
                    <CartColumns />
                    <CartList data={data} />
                    <CartTotal data={data} />
                  </React.Fragment>
                );
              } else {
                return <EmptyCart />;
              }
            }}
          </ProductConsumer>
        </section>
      </React.Fragment>
    );
  }
}

export default Cart;
