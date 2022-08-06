import { createContext, useReducer, useEffect } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    rate_limit: [10],
    limit_remaining: [10],
    mock_user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    setInterval(() => {
      rateLimit();
    }, 60000);
  }, []);

  // Get Rate Limit
  const rateLimit = async () => {
    const res = await fetch(`${GITHUB_URL}/rate_limit`);
    const data = await res.json();

    dispatch({
      type: "GET_RATE_LIMIT",
      payload: data.resources.search.limit,
    });

    dispatch({
      type: "GET_LIMIT_REMAINING",
      payload: data.resources.search.remaining,
    });
  };

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`);
    //   , {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // });

    const { items } = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });

    rateLimit();
  };

  // Get Single User
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`);

    const data = await res.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  // Get User Repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
    // , {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // });

    const data = await res.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // Clear Users
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        rate_limit: state.rate_limit,
        limit_remaining: state.limit_remaining,
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        rateLimit,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
