// /app/api/flights/[id]/book/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Flight from "@/models/Flight";


export async function POST(req, { params }) {
    await databaseConnection();
  const flight = await Flight.findById(params.id);
  if (!flight || flight.seatsAvailable < 1) {
    return Response.json({ error: "No seats" }, { status: 400 });
  }
  flight.seatsAvailable -= 1;
  await flight.save();
  return Response.json({ success: true, flight });
}