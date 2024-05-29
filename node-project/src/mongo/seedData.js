import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { userModel } from "../schemas/user.schema.js";
import { dbConnect } from "../mongo/index.js";

async function seedDB() {
  await dbConnect();
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash("Admin", salt);

  const user = {
    name: "Admin",
    email: "admin@gmail.com",
    password: hashPassword,
    created_at: new Date(),
    profile_image: "../../images/admin.jpg",
  };

  const admin = new userModel(user);
  await admin.save();

  console.log("DB seeded");
}

seedDB().then(() => {
  mongoose.connection.close();
});
