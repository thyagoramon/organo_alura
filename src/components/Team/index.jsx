import { FaRegEdit } from "react-icons/fa";
import hexToRgba from "hex-to-rgba";
import UserCard from "../UserCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeModal } from "@/store/modalSlice";

const TeamStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  gap: 2rem;
  width: 100%;
  position: relative;

  .team-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .team-name {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .team-title {
    border-bottom: solid 0.3rem;
    display: inline-block;
    padding-bottom: 0.5rem;
  }

  .team-edit {
    position: absolute;
    top: 0;
    right: -2rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: var(--cor-cinza-medio);
    cursor: pointer;
  }
`;

const Team = ({ team, users }) => {
  const dispatch = useDispatch();

  return (
    <TeamStyled style={{ backgroundColor: hexToRgba(team.cor, 0.25) }}>
      <div className="team-name">
        <h3 className="team-title" style={{ borderColor: team.cor }}>
          {team.nome}
        </h3>

        <button
          className="team-edit"
          onClick={() => dispatch(changeModal({modal: 'modalEditTeam', open: true, data: team.id}))}
        >
          <FaRegEdit />
        </button>
      </div>

      <div className="team-list container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            nome={user.nome}
            cargo={user.cargo}
            imagem={user.imagem}
            cor={team.cor}
          />
        ))}
      </div>
    </TeamStyled>
  );
};

export default Team;
