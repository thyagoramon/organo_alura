import { createSlice, nanoid } from "@reduxjs/toolkit";

const teams = [
  {
    id: nanoid(),
    nome: "Programação",
    cor: "#57c278",
  },
  {
    id: nanoid(),
    nome: "Front-end",
    cor: "#82CFFA",
  },
  {
    id: nanoid(),
    nome: "Data Science",
    cor: "#A6D157",
  },
  {
    id: nanoid(),
    nome: "Devops",
    cor: "#E06B69",
  },
  {
    id: nanoid(),
    nome: "UX e Design",
    cor: "#DB6EBF",
  },
  {
    id: nanoid(),
    nome: "Mobile",
    cor: "#FFBA05",
  },
  {
    id: nanoid(),
    nome: "Inovação e gestão",
    cor: "#FF8A29",
  },
];

const teamsSlice = createSlice({
  name: "teams",
  initialState: teams,
  reducers: {
    addNewTeam: (state, { payload }) => {
      const name = payload.trim().toLowerCase();
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
