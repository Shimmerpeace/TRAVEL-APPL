//components/AddFlightForm.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddFlightForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  
  const [airline, setAirline] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
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
        body: JSON.stringify({ airline, from, to, departureTime, arrivalTime }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add flight");
      }
      // On success: reset form, then refresh current route to fetch updated flights
      setAirline("");
      setFrom("");
      setTo("");
      setDepartureTime("");
      setArrivalTime("");
      router.refresh(); // Refresh data on current page (Next.js 13+ App Router)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded bg-white max-w-md">
      <h3 className="text-lg font-semibold mb-3 text-blue-700">Add New Flight</h3>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
       className="block w-full mb-2 p-2 border rounded"
        placeholder="Flight Name"
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
        required
      />
      <input
       className="block w-full mb-2 p-2 border rounded"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        required
      />
      <input
       className="block w-full mb-2 p-2 border rounded"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <input
       className="block w-full mb-2 p-2 border rounded"
        placeholder="Departure Time"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
        required
      />
      <input
       className="block w-full mb-2 p-2 border rounded"
        placeholder="Arrival Time"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
        required
      />
      <button
      type="submit" 
      disabled={loading}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Add Flight"}
      </button>
    </form>
  );
}
