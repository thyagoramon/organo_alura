import { useState } from "react";
import styled from "styled-components";
import InputText from "../InputText";
import InputSelect from "../InputSelect";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "@/store/usersSlice";
import { changeModal } from "@/store/modalSlice";

const FormEditUserStyled = styled.form`
	width: 100%;
	display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const FormEditUser = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const userId = useSelector((state) => state.modal.modalData);
  const users = useSelector((state) => state.users);
  const user = users.find(user => user.id === userId);
    
  //useState dos inputs
  const [nome, setNome] = useState(user.nome);
  const [cargo, setCargo] = useState(user.cargo);
  const [imagem, setImagem] = useState(user.imagem);
  const [time, setTime] = useState(user.time);
  const id = user.id;

  //função submit novo usuário
  const formSubmit = (e) => {
    e.preventDefault();
    
    //validação do nome, apenas se mudar
    const newName = nome.trim();

    if (newName === '') {
      alert(`Nome inválido, tente outro nome`);
      return;
    }

    const nameChanged = newName.toLowerCase() !== user.nome.toLowerCase();

    if (nameChanged) {
      const exist = users.some(
        (user) => user.nome.trim().toLowerCase() === newName.toLowerCase()
      );
      if (exist) {
        alert(`'${nome}' já está na lista de usuários, tente outro nome`);
        return;
      }
    }

    //preparação dos dados
    const editedUser = {
      id,
      nome: newName,
      cargo,
      imagem,
      time,
    }

    //envio dos dados para o store
    dispatch(editUser(editedUser))  

    //limpeza dos inputs após envio
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");

    //fechamento da modal
    dispatch(changeModal({modal: "modalEditUser", open: false}))
  };

  //componente
  return (
    <FormEditUserStyled onSubmit={formSubmit}>
      <h3>Dados do usuário</h3>
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
    </FormEditUserStyled>
  );
};

export default FormEditUser;
