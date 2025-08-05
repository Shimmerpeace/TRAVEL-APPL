// /app/api/hotels/[id]/book/route.js

import { databaseConnection } from "@/library/dataBaseConnect";
import Hotel from "@/models/Hotel";

export async function POST(req, { params }) {
    await databaseConnection();
  const hotel = await Hotel.findById(params.id);
  if (!hotel || hotel.availability < 1) {
    return Response.json({ error: "No hotel reservations." }, { status: 400 });
  }
  hotel.availability -= 1;
  await hotel.save();
  return Response.json({ success: true, hotel });
}