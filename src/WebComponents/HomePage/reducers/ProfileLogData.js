const initialState = {
  Name: "Manoj",
  profileUrl: "https://i.imgur.com/WK2idvp.png",
};
const ProfileLogData = (state = initialState, action) => {
  switch (action.type) {
    case "Data_profile":
      const { data } = action.payload;
      return (state = data);

    case "Delete_Data_profile":
      return (state = {});
    default:
      return state;
  }
};
export default ProfileLogData;
