import { Router } from "express";
import multer from "multer";

import {
  admission,
  admissionPayment,
  admissionRenewable,
  admissionStatus,
} from "../controllers/admission.controllers.js";

const admissionRoutes = Router();

const storage = multer.memoryStorage(); // Store the file as a Buffer
const upload = multer({ storage });

admissionRoutes.post("/new-admission", upload.single("aadharDoc"), admission);
admissionRoutes.post("/renewale-admission", admissionRenewable);
admissionRoutes.post("/payment-admission", admissionPayment);
admissionRoutes.get("/status-admission", admissionStatus);

export default admissionRoutes;
