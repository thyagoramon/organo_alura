import styled from "styled-components";
import { IoMdCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

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

  .userCard-fav {
    margin-top: 0.5rem;
    font-size: 1.5rem;

    .fav-true,
    .fav-false {
      cursor: pointer;
    }
    .fav-true {
      color: var(--cor-vermelho);
    }
    .fav-false {
      color: var(--cor-cinza-medio);
    }
  }
`;

const UserCard = (props) => {
  return (
    <UserCardStyled>
      <IoMdCloseCircle
        className="userCard-delete"
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="userCard-top" style={{ backgroundColor: props.cor }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="userCard-botton">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <div className="userCard-fav">
          {props.fav ? (
            <IoIosHeart
              onClick={() => props.onFav(props.id)}
              className="fav-true"
            />
          ) : (
            <IoIosHeartEmpty
              onClick={() => props.onFav(props.id)}
              className="fav-false"
            />
          )}
        </div>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
