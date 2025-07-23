import { databaseConnection } from "@/library/dataBaseConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await databaseConnection();
  const { email, password } = await req.json();

  if (!email || !password)
    return new Response(JSON.stringify({ message: "All fields required" }), { status: 400 });

  const user = await User.findOne({ email });
  if (!user) return new Response(JSON.stringify({ message: "No user found" }), { status: 404 });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });

  // For production, use JWT or next-auth for real sessions!
  return new Response(JSON.stringify({ success: true, user: { name: user.name, email: user.email } }), { status: 200 });
}