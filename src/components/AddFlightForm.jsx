//components/AddFlightForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddFlightForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/flights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add flight");
      }

      // On success: reset form, then refresh current route to fetch updated flights
      setName("");
      setDescription("");
      router.refresh(); // Refresh data on current page (Next.js 13+ App Router)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Flight</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="Flight Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Flight Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Add Flight"}
      </button>
    </form>
  );
}
