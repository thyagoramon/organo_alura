import { createSlice, nanoid } from "@reduxjs/toolkit";

const teams = [
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

    editTeamColor: (state, { payload }) => {
      //payload: {id, color}
      const { id, color } = payload;
      const teamToChange = state.find((team) => team.id === id);
      teamToChange.cor = color;
    },

    editTeamName: (state, { payload }) => {
      //payload: {id, newName}
      const { id, newName } = payload;
      const teamToChange = state.find((team) => team.id === id);
      teamToChange.nome = newName;
    },
  },
});

export const { addNewTeam, editTeamColor, editTeamName } = teamsSlice.actions;
export default teamsSlice.reducer;
