import { databaseConnection } from "@/library/dataBaseConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await databaseConnection();
  const { name, email, password } = await req.json();

  if (!name || !email || !password)
    return new Response(JSON.stringify({ message: "All fields required" }), { status: 400 });

  // Check if user exists
  const existing = await User.findOne({ email });
  if (existing)
    return new Response(JSON.stringify({ message: "Email already registered" }), { status: 409 });
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  await User.create({ name, email, password: hashed });

  return new Response(JSON.stringify({ success: true, message: "Registered successfully" }), { status: 201 });
}