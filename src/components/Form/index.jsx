import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import InputSelect from "../InputSelect";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewUser } from "@/store/usersSlice";

const FormStyled = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 66%;

  .form {
    box-sizing: border-box;
    background-color: var(--cor-cinza-claro);
    box-shadow: var(--sombra-m);
    padding: 2rem 3rem;
    border-radius: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

const Form = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams)

  //useState dos inputs
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  //função submit novo usuário
  const formSubmit = (e) => {
    e.preventDefault();
    
    //dados
    const newUser = {
      id: nanoid(),
      nome,
      cargo,
      imagem,
      time,
      fav: false,
    }

    //enviar dados para store
    dispatch(addNewUser(newUser))

    //limpar inputs após envio
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  //componente
  return (
    <FormStyled>
      <form className="form" onSubmit={formSubmit}>
        <h3>Preencha os dados para adicionar um novo colaborador</h3>
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
        <Button>Novo usuário</Button>
      </form>
    </FormStyled>
  );
};

export default Form;
