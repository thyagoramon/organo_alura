import { useEffect, useRef, useState } from "react";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import hexToRgba from "hex-to-rgba";
import UserCard from "../UserCard";
import styled from "styled-components";

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

  .team-colors {
    position: absolute;
    top: 2rem;
    right: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      cursor: pointer;
    }
  }

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

  .team-editInput {
    background-color: rgba(255, 255, 255, 0.75);
    border: none;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: solid 0.3rem;
    display: inline-block;
    padding-bottom: 0.5rem;
    outline: none;
    font-family: var(--fonte-prata);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }
`;

const Team = ({ team, users, editColor, onDelete, onFav, editTeamName }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team.nome);
  const inputRef = useRef(null);

  //coloca o input em foco quando o mode de edição estiver ativo
  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  //atualiza 'newTeamName' quando o nome do time mudar
  useEffect(() => {
    setNewTeamName(team.nome);
  }, [team.nome]);

  //função para ativar o modo de edição
  const onStartEdit = () => {
    setEditMode(true);
  };

  //função para finalizar a edição
  const onEndEdit = () => {
    setEditMode(false);
    editTeamName(newTeamName, team.nome, team.id);
    setNewTeamName(team.nome);
  };

  return (
    users.length > 0 && (
      //renderização condicional

      <TeamStyled
        style={{ backgroundColor: hexToRgba(team.cor, 0.25) }}
      >
        <div className="team-colors">
          <p>Cor do time: </p>
          <input
            onChange={(e) => editColor(e.target.value, team.id)}
            value={team.cor}
            type="color"
            className="team-color"
          />
        </div>

        {editMode ? (
          <div className="team-name">
            <input
              className="team-editInput"
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              style={{ borderColor: team.cor }}
              ref={inputRef}
              onBlur={onEndEdit}
            />
            <button className="team-edit" onClick={onEndEdit}>
              <FaCheck />
            </button>
          </div>
        ) : (
          <div className="team-name">
            <h3 className="team-title" style={{ borderColor: team.cor }}>
              {team.nome}
            </h3>
            <button className="team-edit" onClick={onStartEdit}>
              <FaRegEdit />
            </button>
          </div>
        )}

        <div className="team-list container">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              nome={user.nome}
              cargo={user.cargo}
              imagem={user.imagem}
              cor={team.cor}
              aoDeletar={onDelete}
              fav={user.fav}
              onFav={onFav}
            />
          ))}
        </div>
      </TeamStyled>
    )
  );
};

export default Team;
