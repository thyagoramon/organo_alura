import { useEffect, useRef, useState } from "react";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import hexToRgba from "hex-to-rgba";
import UserCard from "../UserCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editTeamColor, editTeamName } from "@/store/teamsSlice";
import { MdCancel } from "react-icons/md";
import { updateUsersTeam } from "@/store/usersSlice";

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
  
  .team-cancel {
    position: absolute;
    bottom: 0;
    right: -2.1rem;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
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

const Team = ({ team, users }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams)

  //useStates:
  const [editMode, setEditMode] = useState(false);
  const [newTeamName, setNewTeamName] = useState(team.nome);

  //coloca o input em foco quando o modo de edição tá ativo
  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  //atualiza 'newTeamName' quando o nome do time mudar
  useEffect(() => {
    setNewTeamName(team.nome);
  }, [team.nome]);

  //função para editar nome do time
  const editName = () => {
    //validação de nome vazio
    if (newTeamName.trim() === '') {
      alert('Nome inválido, tente novamente')
      return
    }
    
    //validação de nome repetido
    const changed = newTeamName.trim().toLowerCase() !== team.nome.toLowerCase();
    if (changed) {
      const exist = teams.find(team => team.nome.toLowerCase() === newTeamName.trim().toLowerCase())
      if (exist) {
        alert('Este nome já está sendo usado por outro time, tente outro nome')
        return
      }
    }    

    //atualizar nome
    const editTeam = {
      id: team.id,
      newName: newTeamName,
    }
    dispatch(editTeamName(editTeam));
    
    //atualizar usuários
    const editUsersTeam = {
      newTeamName: newTeamName,
      oldTeamName: team.nome,
    }
    dispatch(updateUsersTeam(editUsersTeam));

    //sair do modo de edição
    setEditMode(false);
  };

  //função para cancelar a edição e restaurar nome anterior
  const cancelEditName = () => {
    setEditMode(false);
    setNewTeamName(team.nome);
  }

  //função para editar cor do time
  const editColor = (color) => {
    const edit = {id: team.id, color: color}
    dispatch(editTeamColor(edit));
  };

  return (
    <TeamStyled style={{ backgroundColor: hexToRgba(team.cor, 0.25) }}>
      <div className="team-colors">
        <p>Cor do time: </p>
        <input
          onChange={(e) => editColor(e.target.value)}
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
          />
          <button className="team-edit" onClick={editName}>
            <FaCheck />
          </button>
          <button className="team-cancel" onClick={cancelEditName}>
            <MdCancel />
          </button>
        </div>
      ) : (
        <div className="team-name">
          <h3 className="team-title" style={{ borderColor: team.cor }}>
            {team.nome}
          </h3>
          <button className="team-edit" onClick={() => setEditMode(true)}>
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
          />
        ))}
      </div>
    </TeamStyled>
  );
};

export default Team;
