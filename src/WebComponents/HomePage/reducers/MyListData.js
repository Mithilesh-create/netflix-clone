const initialState = {
  MyListData: [],
};
const ListMovieData = (state = initialState, action) => {
  switch (action.type) {
    case "Data_MyList":
      const { id, data } = action.payload;
      return {
        ...state,
        MyListData: [
          ...state.MyListData,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "Delete_Data_List":
      const newList = state.MyListData.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        MyListData: newList,
      };

    default:
      return state;
  }
};
export default ListMovieData;
