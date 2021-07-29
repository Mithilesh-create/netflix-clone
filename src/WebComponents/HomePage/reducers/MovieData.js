const initialState = {
  MovieActualData: {},
};
const MovieData = (state = initialState, action) => {
  switch (action.type) {
    case "Data_poster":
      const { data } = action.payload;
      return (state = data);

    case "Delete_Data_modal":
      return (state = {});
    default:
      return state;
  }
};
export default MovieData;
