//app/flights/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FlightCard from "@/components/FlightCard";
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
      <h1>
        {flight.airline} {flight.flightNumber}
      </h1>
      <p>
        {flight.from} &rarr; {flight.to}
      </p>
      <p>
        Departs: {flight.departureTime} | Arrives: {flight.arrivalTime}
      </p>
      <p>Seats Available: {flight.seatsAvailable}</p>
      <p>Price: ${flight.price}</p>
      <p>{flight.details}</p>

      <ul>
        <FlightCard key={flight._id} flight={flight} />
      </ul>

      <BookingForm type="flights" id={flight._id} />
    </div>
  );
}
