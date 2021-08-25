const initialState = null;
const ProfileLogData = (state = initialState, action) => {
  switch (action.type) {
    case "Data_profile":
      const { data } = action.payload;
      return (state = { ...data });

    case "Delete_Data_profile":
      return (state = {});
    default:
      return state;
  }
};
export default ProfileLogData;
