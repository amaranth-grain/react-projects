import styled from "styled-components";

/* Invisible button container */
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

/* Dark Green -> Palm Green on hover */
export const ButtonRoundedDark = styled.button`
  margin: 1rem;
  min-width: 11rem;
  border: 1px solid var(--darkGreen);
  background-color: var(--darkGreen);
  padding: 0.6em 1.2em;
  border-radius: 0.8rem;
  font-size: 1em;
  color: var(--offWhite);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--offWhite);
    background-color: var(--lightGreen);
    border-color: var(--lightGreen);
  }
  &:disabled {
    background-color: var(--tintedGrey);
    color: var(--mainGrey);
    border: 1px solid var(--tintedGrey);
  }
`;

export const ButtonPlain = styled.button`
  margin: 1rem;
  border: 1px solid var(--tintedGrey);
  background-color: var(--tintedGrey);
  padding: 0.6em 1.2em;
  font-size: 1em;
  color: var(--mainDark);
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: var(--darkGreen);
    color: var(--offWhite);
    font-weight: bold;
  }
`;

export const ButtonRoundedLight = styled.button`
  margin: 1rem;
  border: 1px solid var(--mainGrey);
  background-color: var(--offWhite);
  padding: 0.6em 1.2em;
  border-radius: 0.8rem;
  font-size: 1em;
  color: var(--mainGrey);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--darkGreen);
    font-weight: bold;
  }
`;
