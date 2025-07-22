//components/AddVcationForm.jsx
"use client";

import { useState } from "react";

export default function AddVacationForm({ onAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/vacations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add vacation package");
      }

      setName("");
      setDescription("");
      if (onAdded) onAdded();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded bg-white max-w-md">
      <h3 className="text-lg font-semibold mb-3 text-purple-700">Add New Vacation Package</h3>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Vacation Package Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Vacation Package Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Add Vacation Package"}
      </button>
    </form>
  );
}

