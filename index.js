/*----------------------library imports----------------------*/
import { config } from "dotenv";
import { v2 } from "cloudinary";
config();
/*----------------------custom imports----------------------*/
import app from "./src/app.js";
import ConnectToDB from "./src/db/index.js";

const PORT = process.env.PORT || 3001;

/*----------------->> Cloudinary configuration<<-----------------*/
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, async () => {
  await ConnectToDB();
  console.log(`App is running on http://localhost:${PORT}`);
});
