const initialState = "";
const PriceData = (state = initialState, action) => {
  switch (action.type) {
    case "price_data":
      const { data } = action.payload;
      return (state = data);
    default:
      return state;
  }
};
export default PriceData;
