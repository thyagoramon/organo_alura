import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: {},
  modalNewUser: false,
  modalNewTeam: false,
  modalEditUser: false,
  modalEditTeam: false,
  modalRemoveTeam: false,
  modalMoveUsers: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state, { payload }) => {
      //payload: nomeDaModal, bolean, data
      const modal = payload.modal
      const open = payload.open
      const data = payload.data
      state[modal] = open;
      state.modalData = data;
    },
    resetModals: () => initialState,
  },
});

export const { changeModal, resetModals } = modalSlice.actions;
export default modalSlice.reducer;
