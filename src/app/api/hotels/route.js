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
    return NextResponse.json(
      { error: "Failed to fetch hotels" },
      { status: 500 }
    );
  }
}
