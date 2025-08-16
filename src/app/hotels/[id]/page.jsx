//app/hotels/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookingForm from "@/components/BookingForm";

export default function HotelDetail() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/hotels/${id}`)
        .then((res) => res.json())
        .then(setHotel);
    }
  }, [id]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div>      
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <BookingForm type="hotels" id={hotel._id} />
    </div>
  );
}
