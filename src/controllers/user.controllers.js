/*1======================Login======================*/
const login = async (req, res, next) => {
  res.send("Login");
};

/*2======================Logout======================*/
const logout = async (req, res, next) => {
  res.send("Logout");
};

/*3======================getProfile======================*/
const profile = async (req, res, next) => {
  res.send("Logout");
};

/*4======================forgot password======================*/
const forgotPassword = async (req, res, next) => {
  res.send("forgot password");
};

/*5======================change password======================*/
const changePassword = async (req, res, next) => {
  res.send("change password");
};

export { logout, profile, login, forgotPassword, changePassword };
