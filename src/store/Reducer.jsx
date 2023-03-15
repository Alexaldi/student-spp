const initialState = {
  user_token: null,
  siswa_data: {}

};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        user_token: action.payload,
      };
    case "SET_SISWA":
      return {
        ...state,
        siswa_data: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, AppReducer };