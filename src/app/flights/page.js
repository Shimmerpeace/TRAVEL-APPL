//app/flights/page.js
"use client";

import { useEffect, useState } from "react";
import FlightCard from "@/components/FlightCard";

export default function FlightsListing() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("/api/flights")
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, []);

  if (!flights.length) return <div>Loading flights...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Available Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id}>
            <FlightCard flight={flight} />
          </li>
        ))}
      </ul>
    </div>
  );
}