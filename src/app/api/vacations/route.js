// app/api/vacations/route.js
import { databaseConnection } from '@/library/dataBaseConnect'
import Vacation from '@/models/Vacation';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await databaseConnection();
    const vacations = await Vacation.find().lean();
    return NextResponse.json(vacations, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch vacations', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await databaseConnection();
    const data = await req.json();
    // Validate body fields as needed
    if (!data.title || !data.description) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    const newVacation = new Vacation(data);
    await newVacation.save();
    return new NextResponse(JSON.stringify(newVacation), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
