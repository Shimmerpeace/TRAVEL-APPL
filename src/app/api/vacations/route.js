// app/api/vacations/route.js
import { databaseConnection } from '@/library/dataBaseConnect'
import Vacation from '@/models/Vacation';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to MongoDB
    await databaseConnection();

    // Fetch all vacations using Mongoose and convert to plain JS objects
    const vacations = await Vacation.find().lean();

    // Return JSON response
    return NextResponse.json(vacations, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch vacations', error: error.message },
      { status: 500 }
    );
  }
}