import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersTeam } from "@/store/usersSlice";
import { changeModal, resetModals } from "@/store/modalSlice";
import InputColor from "../InputColor";
import { editTeam, removeTeam } from "@/store/teamsSlice";

const FormEditTeamStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormEditTeam = () => {
  const dispatch = useDispatch();
  
  //constantes
  const teamId = useSelector((state) => state.modal.modalData);
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);
  const team = teams.find(team => team.id === teamId);
    
  //useState dos inputs
  const [nome, setNome] = useState(team.nome);
  const [cor, setCor] = useState(team.cor);
  const id = team.id;

  //função submit edição
  const formSubmit = (e) => {
    e.preventDefault();

    const newName = nome.trim();

    // verificação de nome vazio
    if (newName === '') {
      alert(`Nome inválido, tente outro nome`);
      return;
    }

    // verificação de nome existente
    const currentName = team.nome.toLowerCase();
    const nameChanged = newName.toLowerCase() !== currentName;

    if (nameChanged) {
      const exist = teams.some(
        (team) => team.nome.toLowerCase() === newName.toLowerCase()
      );
      if (exist) {
        alert(`Este nome já está sendo usado por outro time, tente outro nome`);
        return;
      }
    }

    //preparação dos dados
    const editedTeam = {
      id,
      nome: newName,
      cor,
    }

    //envio dos dados para o store
    dispatch(editTeam(editedTeam));
        
    //atualizar usuários
    const editUsersTeam = {
      newTeamName: newName,
      oldTeamName: team.nome,
    }
    dispatch(updateUsersTeam(editUsersTeam));

    //fechamento da modal
    dispatch(resetModals())
  };

  const handleDelete = () => {
    //verificação se time contem usuários
    const teamContainUser = users.some(user => user.time === team.nome)

    //se tem usuário, opções
    if (teamContainUser) {
      //abrir nova modal
      dispatch(resetModals());
      dispatch(changeModal({modal: 'modalRemoveTeam', open: true, data: team.id}))
      return
    }

    //se não, deleta
    dispatch(resetModals());
    dispatch(updateUsersTeam({ oldTeamName: team.nome, newTeamName: "" }));
    dispatch(removeTeam(id));
  };

  //componente
  return (
    <FormEditTeamStyled onSubmit={formSubmit}>
      <h3>Editar time</h3>
      <InputText
        label="Nome"
        id="nome"
        placeholder="Nome do time"
        required={true}
        value={nome}
        hook={(value) => setNome(value)}
      />

      <InputColor
        id='cor'
        label='Cor do time'
        value={cor}
        hook={setCor}
      />

      <Button type="submit">Salvar</Button>

      <Button
        type="button"
        onClick={() => dispatch(resetModals())}
      >Cancelar</Button>

      <Button
        type="button"
        onClick={handleDelete}
      >Excluir time</Button>
    </FormEditTeamStyled>
  );
};

export default FormEditTeam;
