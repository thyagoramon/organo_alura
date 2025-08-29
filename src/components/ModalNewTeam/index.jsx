import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import InputColor from "../InputColor";
import Button from "../Button";

const ModalNewTeamStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .ModalNewTeam {
    background-color: var(--cor-cinza-claro);
    box-shadow: var(--sombra-m);
    padding: 2rem 3rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 50vw;
    z-index: 10;
  }
`;

const ModalNewTeam = ({ showModalNewTeam, setShowModalNewTeam }) => {
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#ff9999");

  // const newTime = (e) => {
  // 	e.preventDefault()
  // 	newTeam({
  // 		id: uuidv4(),
  // 		nome: nomeTime,
  // 		cor: corTime
  // 	})

  // 	//limpar inputs após envio
  // 	setNomeTime('')
  // 	setCorTime('#ff9999')
  // }

  return (
    showModalNewTeam && (
      <ModalNewTeamStyled onClick={() => setShowModalNewTeam(false)}>
        <form className="ModalNewTeam" onClick={(e) => e.stopPropagation()}>
          <h3>Preencha os dados para adicionar um novo time à lista</h3>
          <InputText
            label="Time"
            id="novoTime"
            placeholder="Digite o nome do time"
            required={true}
            value={nomeTime}
            hook={(value) => setNomeTime(value)}
          />
          <InputColor
            label="Cor:"
            id="cor"
            placeholder="Digite a cor do time"
            required={true}
            value={corTime}
            hook={(value) => setCorTime(value)}
          />
          <Button>Novo Time</Button>
        </form>
      </ModalNewTeamStyled>
    )
  );
};

export default ModalNewTeam;
