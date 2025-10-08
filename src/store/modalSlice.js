import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalNewUser: false,
    modalNewTeam: false,
  },
  reducers: {
    changeModal: (state, { payload }) => {
      //payload: nomeDaModal, bolean
      const modal = payload.modal
      const open = payload.open
      console.log(modal + ' ' + open)
      state[modal] = open;
    },
  },
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
