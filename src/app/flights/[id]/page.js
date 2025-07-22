import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookingForm from '../../components/BookingForm';
import Navbar from '../../components/Navbar';

export default function FlightDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/api/flights')
        .then(r => r.json())
        .then(data => setFlight(data.find(f => f._id === id)));
    }
  }, [id]);

  if (!flight) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h2>{flight.name}</h2>
      <p>{flight.description}</p>
      {/* ...more details... */}
      <BookingForm type="flights" id={flight._id} />
    </div>
  );
}
