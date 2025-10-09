import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";

const CloseButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: var(--cor-preto);  
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    scale: 1.2;
  }
  
`;

const CloseButton = ({onClick}) => {
  return (
    <CloseButtonStyled onClick={onClick} >
      <IoMdCloseCircle/>
    </CloseButtonStyled>
  )
}

export default CloseButton;
