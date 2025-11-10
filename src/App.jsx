import Banner from "./components/Banner";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { changeModal } from "./store/modalSlice";
import FormNewUser from "./components/FormNewUser";
import FormEditUser from "./components/FormEditUser";
import FormNewTeam from "./components/FormNewTeam";
import FormEditTeam from "./components/FormEditTeam";
import FormRemoveTeam from "./components/FormRemoveTeam";
import FormMoveUsers from "./components/FormMoveUsers";
import UnallocatedUsers from "./components/UnallocatedUsers";

export default function App() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);

  return (
    <>
      <Modal modalName={"modalNewUser"}><FormNewUser /></Modal>
      <Modal modalName={"modalEditUser"}><FormEditUser /></Modal>
      <Modal modalName={"modalNewTeam"}><FormNewTeam /></Modal>
      <Modal modalName={"modalEditTeam"}><FormEditTeam /></Modal>
      <Modal modalName={"modalRemoveTeam"}><FormRemoveTeam /></Modal>
      <Modal modalName={"modalMoveUsers"}><FormMoveUsers /></Modal>

      <Banner />
      
      <section className="section padding container gap">
        <Button
          onClick={() =>
            dispatch(changeModal({ modal: "modalNewUser", open: true }))
          }
        >
          Novo Usuário
        </Button>

        <Button
          onClick={() =>
            dispatch(changeModal({ modal: "modalNewTeam", open: true }))
          }
        >
          Novo Time
        </Button>
      </section>
      <section className="section">
        {teams.map((team) => (
          team.id !== 0 &&
            <Team
            key={team.id}
            team={team}
            users={users.filter((user) => user.time === team.nome)}
            /> 
        ))}
        {teams.map((team) => (
          team.id === 0 &&         
            <UnallocatedUsers key={team.id}/>
        ))}

      </section>
      <Footer dev="Thyago Ramon" link="https://github.com/thyagoramon" />
    </>
  );
}
