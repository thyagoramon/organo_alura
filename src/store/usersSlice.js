import { createSlice, nanoid } from "@reduxjs/toolkit";

const users = [
  {
    id: nanoid(),
    nome: "Thyago",
    cargo: "Desenvolvedor front-end",
    imagem: "http://github.com/thyagoramon.png",
    time: "teste 1",
  },
  {
    id: nanoid(),
    nome: "Ramon",
    cargo: "Desenvolvedor front-end",
    imagem: "http://github.com/thyagoramon.png",
    time: "teste 1",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addNewUser: (state, { payload }) => {
      //payload: objeto com dados do usuário      
      state.push(payload);
    },

    deleteUser: (state, { payload }) => {
      //payload: id do usuário
      return state.filter((user) => user.id !== payload);
    },
    
    editUser: (state, { payload }) => {
      //payload: objeto com dados do usuário
      const index = state.findIndex(user => user.id === payload.id)
      state[index] = {...payload}
    },
    
    updateUsersTeam: (state, { payload }) => {
      //payload: {newTeamName, oldTeamName}

      const {newTeamName, oldTeamName} = payload;

      //alterar time
      state.map(user => {
        if (user.time === oldTeamName) {
          return user.time = newTeamName
        }
      })
    }
  },
});

export const { addNewUser, deleteUser, editUser, updateUsersTeam } = usersSlice.actions;
export default usersSlice.reducer;
