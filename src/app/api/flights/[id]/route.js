// app/api/flights/[id]/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Flight from "@/models/Flight";

export async function GET(req, { params }) {
  try {
    await databaseConnection();
    const flight = await Flight.findById(params.id).lean();
    if (!flight) return new Response(JSON.stringify({ error: "Flight not found" }), { status: 404 });
    return new Response(JSON.stringify(flight), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await databaseConnection();
    const body = await req.json();
    const updatedFlight = await Flight.findByIdAndUpdate(params.id, body, { new: true }).lean();
    if (!updatedFlight) return new Response(JSON.stringify({ error: "Flight not found" }), { status: 404 });
    return new Response(JSON.stringify(updatedFlight), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await databaseConnection();
    const deleted = await Flight.findByIdAndDelete(params.id);
    if (!deleted) return new Response(JSON.stringify({ error: "Flight not found" }), { status: 404 });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
