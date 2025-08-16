//app/flights/page.js
"use client";

import { useEffect, useState } from "react";
import FlightCard from "@/components/FlightCard";
import AddFlightForm from "@/components/AddFlightForm";

export default function FlightsPage() {
  const [flights, setFlights] = useState([]);

  const fetchFlights = async () => {
    try {
      const res = await fetch("/api/flights");
      const data = await res.json();
      setFlights(data);
    } catch (err) {
      console.error("Failed to fetch flights:", err);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  if (!flights.length) return <div>Loading flights...</div>;

  const handleAdded = () => {
    fetchFlights();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4 px-6 mb-6">
        <h1 className="text-3xl font-bold">Flights</h1>
      </header>

      <main className="container mx-auto px-4">
        {flights.length === 0 && <p>No flights available.</p>}
        <ul className="grid gap-4 md:grid-cols-3">
          {flights.map((flight) => (
            <li key={flight._id}>
              <FlightCard flight={flight} />
            </li>
          ))}
        </ul>
        <AddFlightForm onAdded={handleAdded} />
      </main>
    </div>
  );
}
