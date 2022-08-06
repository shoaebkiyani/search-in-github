const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_RATE_LIMIT":
      return {
        ...state,
        rate_limit: action.payload,
        loading: false,
      };
    case "GET_LIMIT_REMAINING":
      return {
        ...state,
        limit_remaining: action.payload,
        loading: false,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
