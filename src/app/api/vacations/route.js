// app/api/vacations/route.js
import { databaseConnection } from '@/library/dataBaseConnect'
import Vacation from '@/models/Vacation';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await databaseConnection()
    const vacations = await Vacation.find().lean()
    return NextResponse.json(vacations, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch vacations', error: error.message },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    await databaseConnection()
    const data = await req.json()

    // Required fields check
    if (!data.title || !data.description || data.price === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Type check for price
    if (typeof data.price !== 'number') {
      return NextResponse.json(
        { error: 'Please give a price in euros.' },
        { status: 400 }
      )
    }

    const newVacation = await Vacation.create(data)
    return NextResponse.json(newVacation, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
