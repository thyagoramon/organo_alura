import { createSlice, nanoid } from "@reduxjs/toolkit";

const users = [
  {
    id: nanoid(),
    nome: "Thyago Ramon",
    cargo: "Desenvolvedor front-end",
    imagem: "http://github.com/thyagoramon.png",
    time: "Front-end",
  },
  {
    id: nanoid(),
    nome: "Fulano de tal",
    cargo: "Desenvolvedor front-end",
    imagem: "http://github.com/thyagoramon.png",
    time: "Front-end",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addNewUser: (state, { payload }) => {
      //payload: objeto com dados do usuário
      const userName = payload.nome.trim().toLowerCase();
      const exists = state.some(
        (user) => user.nome.trim().toLocaleLowerCase() === userName
      );
      if (exists) {
        alert(`'${payload.nome}' já está na lista de usuários`);
        return;
      }

      state.push(payload);
    },

    deleteUser: (state, { payload }) => {
      //payload: id do usuário
      return state.filter((user) => user.id !== payload);
    },
    
    editUser: (state, { payload }) => {
      //payload: objeto com dados do usuário
      console.log(payload);
    },
  },
});

export const { addNewUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
