//app/flights/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookingForm from "@/components/BookingForm";

export default function FlightDetail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/flights/${id}`)
        .then((res) => res.json())
        .then(setFlight);
    }
  }, [id]);

  if (!flight) return <div>Loading...</div>;

  return (
    <div>
      
      <h2>{flight.name}</h2>
      <p>{flight.description}</p>
      <BookingForm type="flights" id={flight._id} />
    </div>
  );
}

