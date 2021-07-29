const initialState = "";
const PassData = (state = initialState, action) => {
  switch (action.type) {
    case "pass_data":
      const { data } = action.payload;
      return (state = data);
    default:
      return state;
  }
};
export default PassData;
