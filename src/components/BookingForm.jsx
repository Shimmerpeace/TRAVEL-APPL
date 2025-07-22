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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Details such as dates, guests, ..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
        <button type="submit">Book</button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default BookingForm;
