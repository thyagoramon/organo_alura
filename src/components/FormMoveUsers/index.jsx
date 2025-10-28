import styled from "styled-components";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "@/store/usersSlice";
import { resetModals } from "@/store/modalSlice";
import InputSelect from "../InputSelect";
import { useState } from "react";
import { removeTeam } from "@/store/teamsSlice";

const FormMoveUsersStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormMoveUsers = () => {
  const dispatch = useDispatch();
  const [novoTime, setNovoTime] = useState(""); 

  const teams = useSelector((state) => state.teams);
  const teamId = useSelector((state) => state.modal.modalData);
  const team = teams.find(team => team.id === teamId);    
  const users = useSelector((state) => state.users);

  const teamsToMove = teams.filter(i => i.nome !== team.nome)

  const formSubmit = (e) => {
    e.preventDefault();
    
    //editar usuários
    const usersToMove = users.filter(user => user.time === team.nome)

    usersToMove.map(user => {
      const data = {
        id: user.id,
        nome: user.nome,
        cargo: user.cargo,
        imagem: user.imagem,
        time: novoTime,
      }
      dispatch(editUser(data))
    })

    //excluir time
    dispatch(removeTeam(team.id));

    //fechamento da modal
    dispatch(resetModals())
  };

  //componente
  return (
    <FormMoveUsersStyled onSubmit={formSubmit}>
      <h3>Mover usuário(s) para outro time</h3>

      <InputSelect
        label="Selecione o time"
        id="time"
        items={teamsToMove.map((time) => time.nome)}
        value={novoTime}
        hook={(value) => setNovoTime(value)}
      />

      <Button
        type="submit"
      >Confirmar</Button>

      <Button
        type="button"
        onClick={() => dispatch(resetModals())}
      >Cancelar</Button>
    </FormMoveUsersStyled>
  );
};

export default FormMoveUsers;
