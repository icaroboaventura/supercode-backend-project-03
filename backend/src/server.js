import { app } from "./app.js";
import { connectToDatabase } from "./middlewares/dbConnection.js";

connectToDatabase()
  .then(() => {
    const PORT = 777;
    app.listen(PORT, () => console.log("Server listening at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
