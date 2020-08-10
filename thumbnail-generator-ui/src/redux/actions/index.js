export const loggin = () => {
  return {
    type: "SIGN_IN",
  };
};

export const userData = (data) => {
  return {
    type: "USER_LOGGED",
    data,
  };
};
