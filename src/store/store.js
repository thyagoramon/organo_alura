import { configureStore } from "@reduxjs/toolkit";
import teamsSlice from "./teamsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    teams: teamsSlice,
    users: usersSlice,
  },
});

export default store;
