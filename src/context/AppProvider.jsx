import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import GlobalStyles from "./GlobalStyles.jsx";

export function AppProvider({ children, preload }) {
  const initialState = {
    users: [
      {
        id: uuidv4(),
        nome: "Thyago Ramon",
        cargo: "Desenvolvedor front-end",
        imagem: "http://github.com/thyagoramon.png",
        time: "Front-end",
        fav: true,
      },
    ],
    
    /*
    teams: [
      {
        id: uuidv4(),
        nome: "Programação",
        cor: "#57c278",
      },
      {
        id: uuidv4(),
        nome: "Front-end",
        cor: "#82CFFA",
      },
      {
        id: uuidv4(),
        nome: "Data Science",
        cor: "#A6D157",
      },
      {
        id: uuidv4(),
        nome: "Devops",
        cor: "#E06B69",
      },
      {
        id: uuidv4(),
        nome: "UX e Design",
        cor: "#DB6EBF",
      },
      {
        id: uuidv4(),
        nome: "Mobile",
        cor: "#FFBA05",
      },
      {
        id: uuidv4(),
        nome: "Inovação e gestão",
        cor: "#FF8A29",
      },
    ],
    */

    showModalNewTeam: false,
  };

  const [state, dispatch] = useReducer(appReducer, preload ?? initialState);

  //adicionar novo usuário
  const addNewUser = (user) => {
    const name = user.nome?.trim().toLowerCase();
    const exists = state.users.some(
      (u) => u.nome?.trim().toLowerCase() === name
    );
    if (exists) {
      alert(`'${user.nome}' já está no organograma`);
      return;
    }
    dispatch({ type: "ADD_USER", payload: user });
  };

  //deletar usuário
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: { id } });
  };

  /*
  //adicionar time  
  const addNewTeam = (team) => {
    const name = team.nome?.trim().toLowerCase();
    const exists = state.teams.some(
      (t) => t.nome?.trim().toLowerCase() === name
    );
    if (exists) {
      alert(`'${team.nome}' já está nalista`);
      return;
    }
    dispatch({ type: "ADD_TEAM", payload: team });
    alert(
      `Time criado com sucesso, agora '${team.nome}' está disponível na opção 'Time' ao criar um novo usuário`
    );
  };
  */

  /*
  //alterar cor do time
  const teamColor = (cor, id) => {
    dispatch({ type: "SET_TEAM_COLOR", payload: { id, cor } });
  };
  */

  /*
  //editar nome do time
  const editTeamName = (newName, oldName, id) => {
    if (newName === oldName) return;

    const exists = state.teams.some((t) => t.nome === newName);
    if (exists) {
      alert(`'${newName}' já está na lista de times, tente outro nome`);
      return;
    }
    dispatch({ type: "EDIT_TEAM_NAME", payload: { id, newName, oldName } });
  };
  */

  //favoritar
  const favoriting = (id) => {
    dispatch({ type: "TOGGLE_FAV", payload: { id } });
  };

  //modal novo time
  const setShowModalNewTeam = (value) => {
    dispatch({ type: "SET_SHOW_MODAL_NEW_TEAM", payload: value });
  };

  const value = {
    users: state.users,
    teams: state.teams,
    showModalNewTeam: state.showModalNewTeam,
    addNewUser,
    deleteUser,
    favoriting,
    setShowModalNewTeam,
    initialState,
  };

  return (
    <AppContext.Provider value={value}>
      <GlobalStyles/>
      {children}
    </AppContext.Provider>
  );
}
