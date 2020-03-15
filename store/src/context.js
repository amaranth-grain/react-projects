import React from "react";
import { products, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
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
    const detailProduct = this.getItem(id);
    this.setState(() => {
      return { detailProduct };
    });
  };

  //TODO
  addToStorage = id => {
    // let selected = [];
    // if (localStorage.getItem("selected") != null) {
    //   selected = JSON.parse(localStorage.getItem("selected"));
    // }
    // selected.push(this.getItem(id));
    // localStorage.setItem("selected", JSON.stringify(selected));
  };

  addToCart = id => {
    let tmpProducts = [...this.state.products];
    //Gets index of desired product based on its prodID
    let i = tmpProducts.indexOf(this.getItem(id));
    let product = tmpProducts[i];
    product.inCart = true;
    product.count += 1;
    product.total += product.price;
    this.setState(
      () => {
        return { products: tmpProducts, cart: [...this.state.cart, product] };
      },
      () => this.addTotal()
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tmpCart = [...this.state.cart];
    const selectedItem = tmpCart.find(item => item.id === id);
    const i = tmpCart.indexOf(selectedItem);
    const product = tmpCart[i];
    product.count += 1;
    product.total += product.price;
    this.setState(
      () => {
        return {
          cart: [...tmpCart]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = id => {
    let tmpCart = [...this.state.cart];
    const selectedItem = tmpCart.find(item => item.id === id);
    const i = tmpCart.indexOf(selectedItem);
    const product = tmpCart[i];
    if (product.count > 1) {
      product.count -= 1;
      product.total -= product.price;
    }
    this.setState(
      () => {
        return {
          cart: [...tmpCart]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  removeItem = id => {
    let tmpProducts = [...this.state.products];
    let tmpCart = [...this.state.cart];
    tmpCart = tmpCart.filter(item => item.id !== id);
    const i = tmpProducts.indexOf(this.getItem(id));
    let removedItem = tmpProducts[i];
    removedItem.total = 0;
    removedItem.inCart = false;
    removedItem.count = 0;
    this.setState(
      () => {
        return {
          cart: [...tmpCart],
          products: [...tmpProducts]
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let cartSubtotal = 0;
    this.state.cart.map(item => (cartSubtotal += item.total));
    const tempTax = cartSubtotal * 0.12;
    const cartTax = parseFloat(tempTax.toFixed(2));
    const cartTotal = cartSubtotal + cartTax;
    this.setState(() => {
      return {
        cartSubtotal,
        cartTax,
        cartTotal
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addToStorage: this.addToStorage,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
