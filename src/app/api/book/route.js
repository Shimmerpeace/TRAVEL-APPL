// app/api/book/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Flight from "@/models/Flight";
import Hotel from "@/models/Hotel";
import Vacation from "@/models/Vacation";

export async function POST(req) {
  try {
    const { type, id, user, email, details } = await req.json();

    if (!type || !id || !user || !email || !details) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    await databaseConnection();

    // Validate type and check existence
    let item;
    switch (type) {
      case "flights":
        item = await Flight.findById(id);
        break;
      case "hotels":
        item = await Hotel.findById(id);
        break;
      case "vacations":
        item = await Vacation.findById(id);
        break;
      default:
        return new Response(
          JSON.stringify({ success: false, error: "Invalid booking type" }),
          { status: 400 }
        );
    }

    if (!item) {
      return new Response(
        JSON.stringify({ success: false, error: `${type.slice(0, -1).toUpperCase()} not found` }),
        { status: 404 }
      );
    }

    // Here you would normally save the booking to the database
    // For demo, just simulate success:

    // e.g. await Booking.create({ type, itemId: id, user, email, details });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || "Server error" }),
      { status: 500 }
    );
  }
}