// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // For production: hash the password
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
