import { Router } from "express";
import {
  admission,
  admissionPayment,
  admissionRenewable,
  admissionStatus,
} from "../controllers/admission.controllers.js";

const admissionRoutes = Router();

admissionRoutes.post("/new-admission", admission);
admissionRoutes.post("/renewale-admission", admissionRenewable);
admissionRoutes.post("/payment-admission", admissionPayment);
admissionRoutes.get("/status-admission", admissionStatus);

export default admissionRoutes;
