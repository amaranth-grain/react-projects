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
