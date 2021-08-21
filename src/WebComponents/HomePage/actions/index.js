export const OpenModal = () => {
  return {
    type: "Open_modal",
  };
};
export const CloseModal = () => {
  return {
    type: "Close_modal",
  };
};

export const DataFromPoster = (data) => {
  return {
    type: "Data_poster",
    payload: {
      data: data,
    },
  };
};

export const DeleteDataModal = () => {
  return {
    type: "Delete_Data_modal",
  };
};
export const DataForMyList = (data) => {
  return {
    type: "Data_MyList",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const DeleteDataMyList = (id) => {
  return {
    type: "Delete_Data_List",
    id,
  };
};

export const OpenPlayer = () => {
  return {
    type: "Open_player",
  };
};
export const ClosePlayer = () => {
  return {
    type: "Close_player",
  };
};
export const DataFromProfile = (data) => {
  return {
    type: "Data_profile",
    payload: {
      data: data,
    },
  };
};

export const DeleteDataProfile = () => {
  return {
    type: "Delete_Data_profile",
  };
};

export const emailData = (data) => {
  return {
    type: "email_data",
    payload: {
      data: data,
    },
  };
};

export const passData = (data) => {
  return {
    type: "pass_data",
    payload: {
      data: data,
    },
  };
};
export const imgData = (data) => {
  return {
    type: "img_data",
    payload: {
      data: data,
    },
  };
};
export const imgDataNum = (data) => {
  return {
    type: "img_datanum",
    payload: {
      data: data,
    },
  };
};

export const PriceDataSend = (data) => {
  return {
    type: "price_data",
    payload: {
      data: data,
    },
  };
};
