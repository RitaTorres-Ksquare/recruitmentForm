import dotenv from "dotenv";
//variables de entorno
dotenv.config();
import app from "./app";
import { startDB } from "./deb";
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
      if ("postgres://postgres:titi2134@localhost:5432/example-cruid") {
        const sequelize = await startDB(
          "postgres://postgres:titi2134@localhost:5432/example-cruid"
        );
        await sequelize.authenticate();
        //await sequelize.sync({ force: true });
       // await sequelize.sync();
        console.log(`App is up and tunning at port: ${PORT}`);
      }
    } catch (error) {
      console.error(error);
      process.abort();
    }
  });
  