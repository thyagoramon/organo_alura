import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ModalNewTeam from "./components/ModalNewTeam";
import { useApp } from "./context/useApp";

export default function App() {
  const {
    teams,
    users,
    showModalNewTeam,
    setShowModalNewTeam,
    deleteUser,
    favoriting,
    teamColor,
    editTeamName,
  } = useApp();

  return (
    <>
      <Banner />
      <section className="section padding container">
        <Form />
      </section>
      <section className="section">
        {teams.map((team) => (
          <Team
            key={team.id}
            team={team}
            editColor={teamColor}
            users={users.filter((user) => user.time === team.nome)}
            onDelete={deleteUser}
            onFav={favoriting}
            editTeamName={editTeamName}
          />
        ))}
      </section>
      <Footer dev="Thyago Ramon" link="https://github.com/thyagoramon" />
      <ModalNewTeam
        showModalNewTeam={showModalNewTeam}
        setShowModalNewTeam={setShowModalNewTeam}
      />
    </>
  );
}
