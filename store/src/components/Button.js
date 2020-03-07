import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: transparent;
  border: none;
  padding: 0.2em 0.6em;
  font-size: 1em;
  color: var(--tintedGrey);
  border-color: var(--offWhite);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: white;
  }
`;

export const ButtonRounded = styled.button`
  margin: 0 1rem;
  border: 1px solid var(--darkGreen);
  background-color: var(--offWhite);
  padding: 0.6em 1.2em;
  border-radius: 0.8rem;
  font-size: 1em;
  color: var(--darkGreen);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: white;
    background-color: var(--darkGreen);
  }
`;
