/*1======================admission======================*/
const admission = async (req, res, next) => {
  res.send("admission");
  //1: take data from the frontend part
  //2: data validation
  //3: check if the user/student did not enrolled any other course at same time period (aadharNo,email)
  //4: Generate unique username/id or also use email & password (this password is temporarily)
  //5:password encryption
  //5: store data in database (mongoDB) with username/id & password
  //6: send username, password & admission response on user email and also send in response
  //   **** exception handling
};

/*2======================admission renewable======================*/
const admissionRenewable = async (req, res, next) => {
  res.send("admission renewale");
};

/*3======================admission payment======================*/
const admissionPayment = async (req, res, next) => {
  res.send("admission payment");
};

/*4======================admission status======================*/
const admissionStatus = async (req, res, next) => {
  res.send("admission status");
};

export { admission, admissionPayment, admissionStatus, admissionRenewable };
