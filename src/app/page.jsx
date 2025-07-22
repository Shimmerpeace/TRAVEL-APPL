"use client";

import NavBar from "@/components/NavBar";
import FlightCard from "@/components/FlightCard";
import HotelCard from "../components/HotelCard";
import VacationCard from "@/components/VacationCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [vacations, setVacation] = useState([]);

  return (
    <>
      <NavBar />
      <h1>Book Flights, Hotels, and Vacation Packages.</h1>

      <div>
        <h2>Flights</h2>
        <div>
          {flights.map((flight) => (
            <FlightCard flight={flight} key={flight._id} />
          ))}
        </div>
      </div>

      <div>
        <h2>Hotels</h2>
        <div>
          {hotels.map((hotel) => (
            <HotelCard hotel={hotel} key={hotel._id} />
          ))}
        </div>
      </div>

      <div>
        <h2>Vacation Packages</h2>
        <div>
          {vacations.map((vaction) => (
            <VacationCard vacation={vacation} key={vacation._id} />
          ))}
        </div>
      </div>

    </>
  );
}

/*



export default function Home() {
 
  useEffect(() => {
    fetch("/api/flights")
      .then((r) => r.json())
      .then(setFlights);
    fetch("/api/hotels")
      .then((r) => r.json())
      .then(setHotels);
    fetch("/api/packages")
      .then((r) => r.json())
      .then(setPackages);
  }, []);
  return (
    <div>
   
  );
}
*/
