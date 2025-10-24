import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/store/usersSlice";
import CloseButton from "../CloseButton";
import EditButton from "../EditButton";
import { changeModal } from "@/store/modalSlice";

const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  border-radius: 1rem;
  width: 260px;
  box-sizing: border-box;
  background-color: var(--cor-branco);
  box-shadow: var(--sombra-m);

  .userCard-delete {
    font-size: 1.5rem;
    color: var(--cor-preto);
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      scale: 1.2;
    }
  }

  .userCard-top {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    width: 100%;
    height: 90px;
    img {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 60px;
      transform: translate(-60px, -60px);
      top: 90px;
      left: 130px;
    }
  }

  .userCard-botton {
    margin-top: 80px;
    text-align: center;
    padding: 0 1.5rem 1rem 1.5rem;
    h4 {
      color: var(--cor-violeta);
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    h5 {
      color: var(--cor-grafite);
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .closeButton {
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
  
  .editButton {
    position: absolute;
    left: 0.6rem;
    top: 0.3rem;
  }
`;

const UserCard = ({ id, nome, cargo, imagem, cor }) => {
  const dispatch = useDispatch();  

  return (
    <UserCardStyled>
      <div className="editButton" title="Editar usuário">
        <EditButton onClick={() => dispatch(changeModal({ modal: "modalEditUser", open: true, data: id }))}/>
      </div>
      <div className="closeButton" title="Remover usuário"><CloseButton onClick={() => dispatch(deleteUser(id))}/></div>

      <div className="userCard-top" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="userCard-botton">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>        
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
