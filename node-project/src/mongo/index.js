import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
  mongoose.set('strictQuery', false);

  // Event listener for successful connection
  mongoose.connection.once('open', () => console.log('DB connection'));

  // Connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase timeout to 30 seconds
    keepAlive: true,
  };

  // Connect to the database
  return mongoose.connect(process.env.DB_LINK, options);
};

// mongoose.connect(
//   `mongodb+srv://tuleshzeronsec:dsdDOhldVw19f6DY@cluster0.hfu01kw.mongodb.net/`
// ).then(() => {
//   console.log('connected..')
// });
// };

