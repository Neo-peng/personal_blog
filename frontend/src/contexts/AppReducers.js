export const AppReducers = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state
  }
}