//components/AddHotelForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddHotelForm({ onAdded }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, description, pricePerNight }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add hotel");
      }
      setName("");
      setLocation("");
      setDescription("");
      setPricePerNight("");
      router.refresh();
      if(onAdded) onAdded(); // Refresh data on current page
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded bg-white max-w-md">
      <h3 className="text-lg font-semibold mb-3 text-green-700">Add New Hotel</h3>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Hotel Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Hotel Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <textarea
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Hotel Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Hotel Price Per Night"
        value={pricePerNight}
        onChange={(e) => setPricePerNight(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Add Hotel"}
      </button>
    </form>
  );
}
