import { configureStore } from "@reduxjs/toolkit";
import teamsSlice from "./teamsSlice";
import usersSlice from "./usersSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    teams: teamsSlice,
    users: usersSlice,
    modal: modalSlice,
  },
});

export default store;
