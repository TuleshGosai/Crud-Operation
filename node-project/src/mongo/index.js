import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
  mongoose.connection.once("open", () => console.log("DB connection"));
  return mongoose.connect(
    `${process.env.DB_LINK}?retryWrites=true&w=majority`,
    { keepAlive: true }
  );
};

// mongoose.connect(
//   `mongodb+srv://tuleshzeronsec:dsdDOhldVw19f6DY@cluster0.hfu01kw.mongodb.net/`
// ).then(() => {
//   console.log('connected..')
// });
// };

