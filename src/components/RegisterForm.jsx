"use client";
import { useState } from "react";

export default function RegisterForm({ onRegister, switchToLogin }) {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); setSuccess("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (res.ok) {
      setSuccess("Registration successful!");
      setTimeout(onRegister, 1000); // switch to login
    } else {
      setError(result.message || "Registration failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-2">Register</h2>
      {error && <div className="bg-red-100 text-red-600 px-3 py-1 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-3 py-1 rounded">{success}</div>}
      <input
        className="border px-4 py-2 rounded-full"
        type="text"
        placeholder="Name"
        required
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
      />
      <input
        className="border px-4 py-2 rounded-full"
        type="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })}
      />
      <input
        className="border px-4 py-2 rounded-full"
        type="password"
        placeholder="Password"
        required
        value={data.password}
        onChange={e => setData({ ...data, password: e.target.value })}
      />
      <button type="submit" className="bg-green-600 text-white rounded-full py-2 font-semibold">Register</button>
      <p className="text-center text-sm mt-2">
        Already have an account?{" "}
        <button type="button" className="text-blue-600 underline" onClick={switchToLogin}>
          Login
        </button>
      </p>
    </form>
  );
}