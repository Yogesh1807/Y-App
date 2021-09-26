const initialState = {
  userData: {},
  loading: false,
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_LOADING": {
      return { ...state, loading: true };
      break;
    }

    case "LOGIN_SUCCESS": {
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
      break;
    }
  }

  return state;
}
