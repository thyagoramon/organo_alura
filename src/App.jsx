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

export default function App() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);

  return (
    <>
      <Modal modalName={"modalNewUser"}><FormNewUser /></Modal>
      <Modal modalName={"modalEditUser"}><FormEditUser /></Modal>
      <Modal modalName={"modalNewTeam"}><FormNewTeam /></Modal>

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
          <Team
            key={team.id}
            team={team}
            users={users.filter((user) => user.time === team.nome)}
          />
        ))}
      </section>
      <Footer dev="Thyago Ramon" link="https://github.com/thyagoramon" />
    </>
  );
}
