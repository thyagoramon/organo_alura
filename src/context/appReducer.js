export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, users: [...state.users, action.payload] };
    }
    case "DELETE_USER": {
      const { id } = action.payload;
      return { ...state, users: state.users.filter((u) => u.id !== id) };
    }
    case "ADD_TEAM": {
      return { ...state, teams: [...state.teams, action.payload] };
    }
    case "SET_TEAM_COLOR": {
      const { id, cor } = action.payload;
      return {
        ...state,
        teams: state.teams.map((t) => (t.id === id ? { ...t, cor } : t)),
      };
    }
    case "EDIT_TEAM_NAME": {
      const { id, newName, oldName } = action.payload;
      return {
        ...state,
        teams: state.teams.map((t) =>
          t.id === id ? { ...t, nome: newName } : t
        ),
        users: state.users.map((u) =>
          u.time === oldName ? { ...u, time: newName } : u
        ),
      };
    }
    case "TOGGLE_FAV": {
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === id ? { ...u, fav: !u.fav } : u
        ),
      };
    }
    case "SET_SHOW_MODAL_NEW_TEAM": {
      return { ...state, showModalNewTeam: action.payload };
    }
    default:
      return state;
  }
}
