import React from "react";

class CartItem extends React.Component {
  render() {
    const { item, data } = this.props;
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = data;
    return (
      <div className="row text-capitalize text-center py-2 align-middle my-auto">
        {/* Product Image */}
        <div className="col-10 m-auto col-lg-2 py-2">
          <img src={img} alt={title} className="cartItemPic img-fluid" />
        </div>
        {/* Product Name */}
        <div className="col-10 m-auto col-lg-2">
          <span className="d-lg-none">Product: </span>
          {title}
        </div>
        {/* Product Price */}
        <div className="col-10 m-auto col-lg-2">
          <span className="">$</span>
          {price}
        </div>
        {/* +/- Quantity */}
        <div className="col-10 m-auto col-lg-2">
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
              {/* Decrement  */}
              <div className="d-flex py-0">
                <span
                  className="btn btnCart mx-1"
                  onClick={() => decrement(id)}
                >
                  -
                </span>
                {/* Quantity */}
                <span className="btn my-1 py-0">{count}</span>
                <span
                  className="btn btnCart mx-1"
                  onClick={() => increment(id)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Remove Product */}
        <div className="col-10 m-auto col-lg-2">
          <div className="cartIcon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
        {/* Total */}
        <div className="col-10 m-auto col-lg-2">
          <strong>$ {total}</strong>
        </div>
      </div>
    );
  }
}
export default CartItem;
