const initialState = {
  userData: undefined,
  loading: false,
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_LOADING": {
      return { ...state, loading: true };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    }
    case "LOGOUT_SUCCESS": {
      return initialState;
    }
    case "SIGNUP_LOADING": {
      return { ...state, loading: true };
    }
    case "SIGNUP_SUCCESS": {
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
