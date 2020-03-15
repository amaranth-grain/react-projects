import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Modal from "./components/Modal";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
