export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBHfExACmMHnu4kCUB2ivsO7o236DhD26JURNDmfe-YGLFZrMj7fflHz5WyOc9fKJFlYlguumBad0Hesh-P3Q9kLvKMEa1Zc1TClS5aJi5IR0wkjkA9tEJkboqGXZnrVtQZ9biDML7faMKI-T26KeeUNyQ0RikdKXfX7F3Vya3G0Ai-",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
