/*----------------------library imports----------------------*/
import express from "express";

/*----------------------controllers imports----------------------*/
import {
  changePassword,
  forgotPassword,
  login,
  logout,
  profile,
} from "../controllers/user.controllers.js";

/*----------------------routes----------------------*/
const userRoutes = express.Router();

userRoutes.post("/login", login);
userRoutes.post("/forgot-password", forgotPassword);
userRoutes.post("/change-password", changePassword);

userRoutes.get("/logout", logout);
userRoutes.get("/profile", profile);

export default userRoutes;
