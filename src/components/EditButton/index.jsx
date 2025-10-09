import { FaUserEdit } from "react-icons/fa";
import styled from "styled-components";

const EditButtonStyled = styled.button`
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

const EditButton = ({onClick}) => {
  return (
    <EditButtonStyled onClick={onClick} >
      <FaUserEdit/>
    </EditButtonStyled>
  )
}

export default EditButton;
