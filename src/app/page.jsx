"use client";

import { useState } from "react";

import Link from "next/link";

export default function Home() {
  const [service, setService] = useState("flights");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Replace with your search logic or routing
    alert(
      `Searching for ${service} to ${destination}${
        checkIn ? ` from ${checkIn}` : ""
      }${checkOut ? ` to ${checkOut}` : ""}`
    );
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
        {/* Hero Section */}
        <section className="bg-blue-50 text-center py-12 px-4 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
              Plan Your Next Adventure Today
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Search and book the best flights, hotels, and vacation packages
              with ease. Your journey starts here.
            </p>
            <Link
              href="/bookingPage"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Start Booking
            </Link>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-lg shadow-lg p-4 grid gap-4 md:grid-cols-5 items-center text-left"
              aria-label="Travel Booking Search Form"
            >
              {/* Service Type Select */}
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2 md:col-span-1"
              >
                <option value="flights">Flights</option>
                <option value="hotels">Hotels</option>
                <option value="vacations">Vacation Packages</option>
              </select>

              {/* Destination Input */}
              <input
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
              />

              {/* Dates (conditional display for relevant services) */}
              {service !== "flights" && (
                <>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </>
              )}

              {/* Search Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto py-12 px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Explore Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Flights */}
            <Link
              href="/transport/flights"
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-blue-600 text-5xl mb-4">✈️</div>
              <h4 className="text-lg font-semibold mb-2">Flights</h4>
              <p className="text-gray-600 text-sm">
                Find and book flights to destinations worldwide.
              </p>
            </Link>

            {/* Hotels */}
            <Link
              href="/hotels"
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-green-600 text-5xl mb-4">🏨</div>
              <h4 className="text-lg font-semibold mb-2">Hotels</h4>
              <p className="text-gray-600 text-sm">
                Browse and book top-rated hotels at the best prices.
              </p>
            </Link>

            {/* Vacations */}
            <Link
              href="/vacations"
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-purple-600 text-5xl mb-4">🌴</div>
              <h4 className="text-lg font-semibold mb-2">Vacation Packages</h4>
              <p className="text-gray-600 text-sm">
                Exclusive deals on flights + hotels for a perfect getaway.
              </p>
            </Link>

            {/* Transport */}
            <Link
              href="/transport"
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-orange-600 text-5xl mb-4">🚌</div>
              <h4 className="text-lg font-semibold mb-2">Transport</h4>
              <p className="text-gray-600 text-sm">
                Buses, trains, and more — travel made easy.
              </p>
            </Link>
          </div>
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
