///app/api/flights/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Flight from "@/models/Flight";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await databaseConnection();
    const flights = await Flight.find({}).lean();
    return new NextResponse(JSON.stringify(flights), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await databaseConnection();
    const body = await req.json();

    // Validate body fields as needed
    if (!body.name || !body.description) {
      return new NextResponse(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const newFlight = new Flight(body);
    await newFlight.save();

    return new NextResponse(JSON.stringify(newFlight), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
