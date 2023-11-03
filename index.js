/*----------------------library imports----------------------*/
import { config } from "dotenv";
config();
/*----------------------custom imports----------------------*/
import app from "./src/app.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
