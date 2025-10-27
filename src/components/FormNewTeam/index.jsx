import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { changeModal } from "@/store/modalSlice";
import InputColor from "../InputColor";
import { addNewTeam } from "@/store/teamsSlice";

const FormNewTeamStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormNewTeam = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams)

  //useState dos inputs
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("#6278F7");

  //função submit novo usuário
  const formSubmit = (e) => {
    e.preventDefault();
    
    //validação do nome
    const teamName = nome.trim();

    if (teamName === '') {
      alert(`Nome inválido, tente outro nome`);
      return;
    }

    const exist = teams.some(
      (team) => team.nome.toLowerCase() === teamName.toLowerCase()
    );

    if (exist) {
      alert(`Este nome já está sendo usado por outro time, tente outro nome`);
      return;
    }

    //dados
    const newTeam = {
      id: nanoid(),
      nome: teamName,
      cor,
    }

    //enviar dados para store
    dispatch(addNewTeam(newTeam))

    //limpar inputs após envio
    setNome("");
    setCor("");

    //fechar modal
    dispatch(changeModal({modal: "modalNewTeam", open: false}))
  };

  //componente
  return (
    <FormNewTeamStyled onSubmit={formSubmit}>
      <h3>Preencha os dados do novo time</h3>

      <InputText
        label="Nome:"
        id="nome"
        placeholder="Digite o nome do time"
        required={true}
        value={nome}
        hook={(value) => setNome(value)}
      />

      <InputColor
        hook={setCor}
        id="cor"
        label="Cor:"
        value={cor}
      />

      <Button type="submit">Criar</Button>
    </FormNewTeamStyled>
  );
};

export default FormNewTeam;
