import { createSlice, nanoid } from "@reduxjs/toolkit";

const teams = [
  {
    id: nanoid(),
    nome: "Front-end",
    cor: "#82CFFA",
  },
  {
    id: nanoid(),
    nome: "Back-end",
    cor: "#57c278",
  },
];

const teamsSlice = createSlice({
  name: "teams",
  initialState: teams,
  reducers: {
    addNewTeam: (state, { payload }) => {
      const name = payload.trim().toLowerCase();
      
      //remover validação
      const exists = state.some(
        (team) => team.nome.trim().toLocaleLowerCase() === name
      );
      if (exists) {
        alert(`'${payload}' já está na lista de times`);
        return;
      }

      state.push(payload);
    },

    editTeamColor: (state, { payload }) => {
      //payload: id, color
      const { id, color } = payload;
      const teamToChange = state.find((team) => team.id === id);
      teamToChange.cor = color;
    },

    editTeamName: (state, { payload }) => {
      //payload: id, newName
      const { id, newName } = payload;
      const teamToChange = state.find((team) => team.id === id);
      teamToChange.nome = newName;
    },
  },
});

export const { addNewTeam, editTeamColor, editTeamName } = teamsSlice.actions;
export default teamsSlice.reducer;
