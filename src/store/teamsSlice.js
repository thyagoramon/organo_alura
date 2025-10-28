import { createSlice, nanoid } from "@reduxjs/toolkit";

const teams = [
  {
    id: 0,
    nome: "Sem time",
    cor: "#666666",
  },
  {
    id: nanoid(),
    nome: "teste 1",
    cor: "#82CFFA",
  },
  {
    id: nanoid(),
    nome: "teste 2",
    cor: "#57c278",
  },
];

const teamsSlice = createSlice({
  name: "teams",
  initialState: teams,
  reducers: {
    addNewTeam: (state, { payload }) => {
      //payoad: {id, nome, cor}
      state.push(payload);
    },

    editTeam: (state, { payload }) => {
      //payload: objeto com dados do usuário
      const index = state.findIndex(team => team.id === payload.id)
      state[index] = {...payload}
    },

    removeTeam: (state, { payload }) => {
      //payload: id do time
      return state.filter((team) => team.id !== payload);
    }
  },
});

export const { addNewTeam, editTeam, removeTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
