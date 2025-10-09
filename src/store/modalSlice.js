import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalData: {},
    modalNewUser: false,
    modalNewTeam: false,
    modalEditUser: false,
  },
  reducers: {
    changeModal: (state, { payload }) => {
      //payload: nomeDaModal, bolean, data
      const modal = payload.modal
      const open = payload.open
      const data = payload.data
      state[modal] = open;
      state.modalData = data;
    },

  },
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
