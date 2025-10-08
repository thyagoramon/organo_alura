import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--cor-violeta);
  color: var(--cor-branco);
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: var(--sombra-p);
  &:hover {
    color: var(--cor-ciano);
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <ButtonStyled type="submit" className="Button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
