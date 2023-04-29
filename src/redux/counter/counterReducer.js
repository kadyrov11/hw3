const initialState = 0;

const counterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "COUNTER/INCREASE":
            return state += payload;
        case "COUNTER/DECREASE":
            if(state >= 0 + payload)return state -= payload;
            return state
        default:
            return state;
    }
  };

export default counterReducer