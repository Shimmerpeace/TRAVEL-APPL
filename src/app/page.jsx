"use client";

import { useEffect, useState } from "react";
import FlightCard from "@/components/FlightCard";
import HotelCard from "@/components/HotelCard";
import VacationCard from "@/components/VacationCard";
import AddFlightForm from "@/components/AddFlightForm";
import AddHotelForm from "@/components/AddHotelForm";
import AddVacationForm from "@/components/AddVacationForm";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [vacations, setVacations] = useState([]);

  const fetchData = async () => {
    try {
      const [flightsRes, hotelsRes, vacationsRes] = await Promise.all([
        fetch("/api/flights"),
        fetch("/api/hotels"),
        fetch("/api/vacations"),
      ]);
      const flightsData = await flightsRes.json();
      const hotelsData = await hotelsRes.json();
      const vacationsData = await vacationsRes.json();

      setFlights(flightsData);
      setHotels(hotelsData);
      setVacations(vacationsData);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdded = () => {
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <header className="bg-blue-600 text-white py-4 px-6 mb-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Book Flights, Hotels, and Vacation Packages
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-16">
        {/* Flights Section */}
        <section id="flights">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-blue-600">
            Flights
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {flights.length === 0 && <p>No flights available.</p>}
            <ul>
              {flights.map((flight) => (
                <li key={flight._id}>
                  <FlightCard flight={flight} />
                </li>
              ))}
            </ul>
          </div>
          <AddFlightForm onAdded={handleAdded} />
        </section>

        {/* Hotels Section */}
        <section id="hotels">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-green-600">
            Hotels
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {hotels.length === 0 && <p>No hotels available.</p>}
            <ul>
              {hotels.map((hotel) => (
                <li key={hotel._id}>
                  <HotelCard hotel={hotel} />
                </li>
              ))}
            </ul>
          </div>
          <AddHotelForm onAdded={handleAdded} />
        </section>

        {/* Vacations Section */}
        <section id="vacations">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-600">
            Vacation Packages
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {vacations.length === 0 && <p>No vacation packages available.</p>}
            <ul>
              {vacations.map((vacation) => (
                <li key={vacation._id}>
                  <VacationCard vacation={vacation} />
                </li>
              ))}
            </ul>
          </div>
          <AddVacationForm onAdded={handleAdded} />
        </section>
      </main>
    </div>
  );
}


/*
"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import FlightCard from "@/components/FlightCard";
import HotelCard from "@/components/HotelCard";
import VacationCard from "@/components/VacationCard";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetch("/api/flights").then(r => r.json()).then(setFlights);
    fetch("/api/hotels").then(r => r.json()).then(setHotels);
    fetch("/api/vacations").then(r => r.json()).then(setVacations);
  }, []);

  return (
    <>
      <NavBar />
      <h1>Book Flights, Hotels, and Vacation Packages.</h1>

      <section>
        <h2>Flights</h2>
        {flights.map(flight => <FlightCard key={flight._id} flight={flight} />)}
      </section>

      <section>
        <h2>Hotels</h2>
        {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>

      <section>
        <h2>Vacation Packages</h2>
        {vacations.map(vacation => <VacationCard key={vacation._id} vacation={vacation} />)}
      </section>
    </>
  );
}
  */
