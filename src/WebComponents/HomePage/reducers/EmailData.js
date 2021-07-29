const initialState = "";
const EmailData = (state = initialState, action) => {
  switch (action.type) {
    case "email_data":
      const { data } = action.payload;
      return (state = data);
    default:
      return state;
  }
};
export default EmailData;
