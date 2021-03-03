import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 1rem 0rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  background-color: #333;
  border: none;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
export default Button;
