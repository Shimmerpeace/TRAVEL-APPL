///app/hotels/page.js
"use client";

import { useEffect, useState } from "react";
import HotelCard from "@/components/HotelCard";

export default function HotelsListing() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  if (!hotels.length) return <div>Loading hotels...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
          <HotelCard  hotel={hotel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
