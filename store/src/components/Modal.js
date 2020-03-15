import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonPlain } from "./Button";
import { Link } from "react-router-dom";
//4:05
class Modal extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) return null;
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="p-5 col-10 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5 className="text-muted">item added to the cart</h5>
                    <img
                      src={img}
                      className="img-fluid my-3 col-sm-6 col-md-10"
                      alt={title}
                    />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: ${price}</h5>
                    <Link to="/products">
                      <ButtonPlain
                        onClick={() => closeModal()}
                        className="modalLink text-uppercase"
                      >
                        back
                      </ButtonPlain>
                    </Link>
                    <Link to="/cart">
                      <ButtonPlain
                        onClick={() => {
                          value.closeModal();
                        }}
                        className="modalLink text-uppercase"
                      >
                        go to cart
                      </ButtonPlain>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--offWhite);
  }
  .modalLink {
    width: auto;
    margin: 0.5em 0.2em;
  }
  a {
    text-decoration: none;
  }
`;

export default Modal;
