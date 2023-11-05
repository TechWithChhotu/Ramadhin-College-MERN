/*----------------------library imports----------------------*/
import express from "express";

import userRoute from "./routes/user.routes.js";
import admissionRoutes from "./routes/admission.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/user/admission", admissionRoutes);

app.get("/ping", (req, res) => {
  res.send("pong");
});

export default app;
