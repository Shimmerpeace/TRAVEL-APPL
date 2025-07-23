"use client";
import { useState } from "react";

export default function LoginForm({ onLogin, switchToRegister }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (res.ok) {
      onLogin(result.user);
    } else {
      setError(result.message || "Login failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
      {error && <div className="bg-red-100 text-red-600 px-3 py-1 rounded">{error}</div>}
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
      <button type="submit" className="bg-blue-600 text-white rounded-full py-2 font-semibold">Login</button>
      <p className="text-center text-sm mt-2">
        Don't have an account?{" "}
        <button type="button" className="text-blue-600 underline" onClick={switchToRegister}>
          Register
        </button>
      </p>
    </form>
  );
}