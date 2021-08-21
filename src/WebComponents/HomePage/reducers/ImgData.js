const initialState = "";
const ImgData = (state = initialState, action) => {
  switch (action.type) {
    case "img_data":
      const { data } = action.payload;
      return (state = data);
    default:
      return state;
  }
};
export default ImgData;
