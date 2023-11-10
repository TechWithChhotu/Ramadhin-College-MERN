import { Router } from "express";
import multer from "multer";
import upload from "../middlewares/multer.middlewares.js";

import {
  admission,
  admissionPayment,
  admissionRenewable,
  admissionStatus,
} from "../controllers/admission.controllers.js";

const admissionRoutes = Router();

// const storage = multer.memoryStorage(); // Store the file as a Buffer
// const upload = multer({ storage });
/*
 upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'pdfFiles', maxCount: 5 }, // You can adjust the number of PDF files
]
*/
admissionRoutes.post(
  "/new-admission",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "aadharDoc", maxCount: 1 },
    { name: "secondaryCertificate", maxCount: 1 },
    { name: "secondaryMarksheet", maxCount: 1 },
  ]),
  admission
);
admissionRoutes.post("/renewale-admission", admissionRenewable);
admissionRoutes.post("/payment-admission", admissionPayment);
admissionRoutes.get("/status-admission", admissionStatus);

export default admissionRoutes;
