//app/api/hotels/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Hotel from "@/models/Hotel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await databaseConnection();
    const hotels = await Hotel.find({}).lean();
    return NextResponse.json(hotels);
  } catch (error) {
    return new NextResponse.json(
      { error: "Failed to fetch hotels" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await databaseConnection();
    const data = await req.json();
    // Validate body fields as needed
    if (!data.name || !data.description) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    const newHotel = new Hotel(data);
    await newHotel.save();
    return new NextResponse(JSON.stringify(newHotel), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
