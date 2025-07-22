// app/api/vacations/route.js
import { databaseConnection } from "@/library/dataBaseConnect";
import Vacation from "@/models/Vacation";

export async function GET(req, { params }) {
  try {
    await databaseConnection();

    const vacation = await Vacation.findById(params.id).lean();
    if (!vacation) {
      return new Response(
        JSON.stringify({ error: "Vacation not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(vacation), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch vacation", details: error.message }),
      { status: 500 }
    );
  }
}