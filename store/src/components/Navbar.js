import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends React.Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand navbar-light" id="main-nav">
        <Link to="/">
          <i className="fas fa-crow fa-2x"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="px-sm-2">
            <span className="mr-2">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <span>Cart</span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--darkGreen);
  min-height: 12vh;
  span {
    color: white !important;
  }
  .nav-link {
    color: white !important;
    font-size: 1rem;
    font-family: "Roboto" !important;
    border: 0.5px solid var(--darkGreen);
  }
  .nav-link:hover {
    color: white !important;
    border: 0.5px solid white;
    border-radius: 0.6rem;
  }
`;

export default Navbar;
