const initialState = {
      age: 0,
      name: "",
      gender: "",
};

const userReducer = (state = initialState, {payload, type}) => {
    console.log(type)
    switch (type) {
        case "USER/SET_NAME":
            return { ...state, name: payload };
        case "USER/SET_AGE":
            return { ...state, age: payload };
        case "USER/SET_GENDER":
            return { ...state, gender: payload };
        default:
            return state;
    }
  };

export default userReducer