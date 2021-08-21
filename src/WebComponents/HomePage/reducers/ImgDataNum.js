const initialState = "";
const ImgDataNum = (state = initialState, action) => {
  switch (action.type) {
    case "img_datanum":
      const { data } = action.payload;
      return (state = data);
    default:
      return state;
  }
};
export default ImgDataNum;
