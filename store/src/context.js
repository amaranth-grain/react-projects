import React from "react";
import { products, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    detailProduct
  };

  componentDidMount = () => {
    this.setProducts();
  };

  // Copying values; avoid getting references to prevent modifying original vals
  setProducts = () => {
    let tmp = [];
    products.forEach(item => {
      const singleItem = { ...item };
      tmp = [...tmp, singleItem];
    });
    this.setState(() => {
      return { products: tmp };
    });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    console.log(`Added ${id} to cart`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
