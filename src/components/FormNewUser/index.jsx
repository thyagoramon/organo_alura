import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import InputSelect from "../InputSelect";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewUser } from "@/store/usersSlice";
import { resetModals } from "@/store/modalSlice";

const FormNewUserStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormNewUser = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams)
  const users = useSelector((state) => state.users)

  //useState dos inputs
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  //função submit novo usuário
  const formSubmit = (e) => {
    e.preventDefault();
    
    //validação do nome
    const newName = nome.trim();

    if (newName === '') {
      alert(`Nome inválido, tente outro nome`);
      return;
    }

    const exist = users.some(
      (user) => user.nome.toLowerCase() === newName.toLowerCase()
    );

    if (exist) {
      alert(`'${nome}' já está na lista de usuários, tente outro nome`);
      return;
    }

    //dados
    const newUser = {
      id: nanoid(),
      nome: newName,
      cargo,
      imagem,
      time,
    }

    //enviar dados para store
    dispatch(addNewUser(newUser))

    //limpar inputs após envio
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");

    //fechar modal
    dispatch(resetModals());
  };

  //componente
  return (
    <FormNewUserStyled onSubmit={formSubmit}>
      <h3>Preencha os dados do novo usuário</h3>
      <InputText
        label="Nome"
        id="nome"
        placeholder="Digite o seu nome"
        required={true}
        value={nome}
        hook={(value) => setNome(value)}
      />
      <InputText
        label="Cargo"
        id="cargo"
        placeholder="Digite o seu cargo"
        required={true}
        value={cargo}
        hook={(value) => setCargo(value)}
      />
      <InputText
        label="Imagem"
        id="imagem"
        placeholder="Informe o endereço da imagem (url)"
        required={false}
        value={imagem}
        hook={(value) => setImagem(value)}
      />
      <InputSelect
        label="Time"
        id="time"
        items={teams.map((time) => time.nome)}
        value={time}
        hook={(value) => setTime(value)}
      />
      <Button type="submit">Salvar</Button>
    </FormNewUserStyled>
  );
};

export default FormNewUser;
