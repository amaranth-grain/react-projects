import React from "react";
import CartItem from "./CartItem";

class CartList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container-fluid">
        {data.cart.map(item => {
          return <CartItem key={item.id} item={item} data={data} />;
        })}
      </div>
    );
  }
}

export default CartList;
