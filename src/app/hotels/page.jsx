///app/hotels/page.js

"use client";

import { useEffect, useState } from "react";
import HotelCard from "@/components/HotelCard";
import AddHotelForm from "@/components/AddHotelForm";

export default function HotelsPage() {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const res = await fetch("/api/hotels");
      const data = await res.json();
      setHotels(data);
    } catch (err) {
      console.error("Failed to fetch hotels:", err);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  if (!hotels.length) return <div>Loading hotels...</div>;

  const handleAdded = () => {
    fetchHotels();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white py-4 px-6 mb-6">
        <h1 className="text-3xl font-bold">Hotels</h1>
      </header>

      <main className="container mx-auto px-4">
        {hotels.length === 0 && <p>No hotels available.</p>}
        <ul className="grid gap-4 md:grid-cols-3">
          {hotels.map((hotel) => (
            <li key={hotel._id}>
              <HotelCard hotel={hotel} />
            </li>
          ))}
        </ul>
        <AddHotelForm onAdded={handleAdded} />
      </main>
    </div>
  );
}

