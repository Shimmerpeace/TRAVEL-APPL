// app/api/vacations/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Vacation from "@/models/Vacation";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await databaseConnection();

    const vacation = await Vacation.findById(params.id).lean();
    if (!vacation) {
      return new NextResponse(
        JSON.stringify({ error: "Vacation not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(vacation), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch vacation", details: error.message }),
      { status: 500 }
    );
  }
}