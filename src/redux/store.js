import { createStore } from "redux";

const initialState = {
    user: {
      age: 0,
      name: "",
      gender: "",
    },
  };
  
  const userReducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case "NAME":
            return { ...state, name: payload };
        case "AGE":
            return { ...state, age: payload };
        case "GENDER":
            return { ...state, gender: payload };
        default:
            return state;
    }
  };

  const store = createStore(userReducer);

  export default store;