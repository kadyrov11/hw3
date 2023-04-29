export const increaseCounter = (num = 1) => ({type: "COUNTER/INCREASE", payload: num})

export const decreaseCounter = (num = 1) => ({type: "COUNTER/DECREASE", payload: num})
