import styled from "styled-components";

const SimpleButtonStyled = styled.button`
  background-color: var(--cor-violeta);
  border: none;
  border-radius: 50%;
  color: var(--cor-branco);
  min-width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: var(--cor-ciano);
  }
`;

const SimpleButton = ({ children, onClick }) => {
  return (
    <SimpleButtonStyled type="button" className="simpleButton" onClick={onClick}>
      {children}
    </SimpleButtonStyled>
  );
};

export default SimpleButton;
