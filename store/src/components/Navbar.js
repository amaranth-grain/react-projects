import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends React.Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
          <i class="fas fa-crow fa-2x"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
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
              <i class="fas fa-shopping-cart"></i>
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--darkGreen);
  margin-top: 2vh;
  .nav-link {
    color: var(--offWhite) !important;
    font-size: 1rem;
    font-family: "Roboto" !important;
    border: 0.5px solid var(--darkGreen);
    padding: 0.4rem 2rem;
  }
  .nav-link:hover {
    color: white !important;
    border: 0.5px solid;
  }
`;

export default Navbar;
