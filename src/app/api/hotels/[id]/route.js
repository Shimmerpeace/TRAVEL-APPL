import { databaseConnection } from "@/library/dataBaseConnect";
import Hotel from "@/models/Hotel";

export async function GET(req, { params }) {
  try {
    await databaseConnection();

    const hotel = await Hotel.findById(params.id).lean();
    if (!hotel) {
      return new Response(JSON.stringify({ error: "Hotel not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(hotel), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch hotel", details: error.message }),
      { status: 500 }
    );
  }
}
 