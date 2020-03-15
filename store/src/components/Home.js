import React from "react";
import { Link } from "react-router-dom";
import { ButtonRoundedLight } from "./Button";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="hero" className="home">
          <div className="overlay">
            <div className="container">
              <div className="hero-content">
                <h1 className="animated fadeInDown">Angela Hopkins</h1>
                <Link to="/products">
                  <ButtonRoundedLight id="heroShop" className="animated fadeIn">
                    Shop
                  </ButtonRoundedLight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
