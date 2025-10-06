import { createSlice, nanoid } from "@reduxjs/toolkit";

const users = [
  {
    id: nanoid(),
    nome: "Thyago Ramon",
    cargo: "Desenvolvedor front-end",
    imagem: "http://github.com/thyagoramon.png",
    time: "Front-end",
    fav: true,
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {

  },
});

export default usersSlice.reducer;
