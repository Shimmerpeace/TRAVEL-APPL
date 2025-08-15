//components/BookingForm
"use client";

import { useState } from "react";

function BookingForm({ type, id }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, id, user, email, details }),
    });

    const data = await res.json();
    if(data.success) setMessage('Booking successful.')
      else setMessage('Booking failed.')
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Reservation</h2>
        <input
          placeholder="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Details such as dates, guests, ..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Book Now!</button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default BookingForm;
