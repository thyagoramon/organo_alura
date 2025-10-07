import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

export default function App() {
  const teams = useSelector((state) => state.teams);
  const users = useSelector((state) => state.users);

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
            users={users.filter(user => user.time === team.nome)}
          />
        ))}
      </section>
      <Footer dev="Thyago Ramon" link="https://github.com/thyagoramon" />
    </>
  );
}
