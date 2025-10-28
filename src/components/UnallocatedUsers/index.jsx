import UserCard from "../UserCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

const UnallocatedUsers = () => {
  const teams = useSelector(state => state.teams)
  const users = useSelector(state => state.users)
  const unallocated = users.filter(user => user.time === teams[0].nome)

  return (
    unallocated.length > 0 &&
    <TeamStyled>
      <div className="team-name">
        <h3 className="team-title">
          Usuários sem time
        </h3>
      </div>

      <div className="team-list container">
        {unallocated.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            nome={user.nome}
            cargo={user.cargo}
            imagem={user.imagem}
            cor={"#203040"}
          />
        ))}
      </div>
    </TeamStyled>
  );
};

export default UnallocatedUsers;
