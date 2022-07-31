import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    mock_user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const mockUser = async () => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/shoaebkiyani`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    console.log(data);
    dispatch({
      type: "GET_MOCK_USER",
      payload: data,
    });
  };

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 401) {
      const res = await fetch(`${GITHUB_URL}/search/users?${params}`);

      const { items } = await res.json();

      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } else {
      const { items } = await res.json();

      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    }
  };

  // Get Single User
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 401) {
      const res = await fetch(`${GITHUB_URL}/users/${login}`);

      const data = await res.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 401) {
      const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

      const data = await res.json();

      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    } else {
      const data = await res.json();

      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };

  // Clear Uses
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        mock_user: state.mock_user,
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        mockUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
