import styled from "styled-components";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "@/store/usersSlice";
import { changeModal, resetModals } from "@/store/modalSlice";
import { removeTeam } from "@/store/teamsSlice";

const FormRemoveTeamStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormRemoveTeam = () => {
  const dispatch = useDispatch();
  
  //constantes
  const teamId = useSelector((state) => state.modal.modalData);
  const teams = useSelector((state) => state.teams);
  const team = teams.find(team => team.id === teamId);    
  const users = useSelector((state) => state.users);
  const id = team.id;

  const handleDelete = () => {
    //deletar time
    dispatch(resetModals());
    dispatch(removeTeam(id));

    //deletar usuários do time
    const usersToDelete = users.filter(user => user.time === team.nome)
    usersToDelete.map(user => {
      dispatch(deleteUser(user.id))
    })
  };

  const handleMove = () => {
    dispatch(resetModals());
    dispatch(changeModal({modal: 'modalMoveUsers', open: true, data: team.id}))
  };

  //componente
  return (
    <FormRemoveTeamStyled>
      <h3>Este time possui um ou mais usuários!</h3>
      <h3>O que você deseja fazer?</h3>

      <Button
        type="button"
        onClick={handleDelete}
      >Excluir time e usuário(s)</Button>

      <Button
        type="button"
        onClick={handleMove}
      >Mover usuário(s) para outro time</Button>

      <Button
        type="button"
        onClick={() => dispatch(resetModals())}
      >Cancelar</Button>
    </FormRemoveTeamStyled>
  );
};

export default FormRemoveTeam;
