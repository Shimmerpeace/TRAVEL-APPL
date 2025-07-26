// app/api/vacations/[id]/route.js
import { databaseConnection } from '@/library/dataBaseConnect'
import Vacation from '@/models/Vacation'
import { NextResponse } from 'next/server'

// GET: Fetch a single vacation by ID
export async function GET(req, { params }) {
  try {
    await databaseConnection()

    const { id } = params
    if (!id) {
      return NextResponse.json({ error: 'Vacation ID is required' }, { status: 400 })
    }

    const vacation = await Vacation.findById(id).lean()
    if (!vacation) {
      return NextResponse.json({ error: 'Vacation not found' }, { status: 404 })
    }

    return NextResponse.json(vacation, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch vacation', details: error.message },
      { status: 500 }
    )
  }
}

// PATCH: Update a vacation by ID
export async function PATCH(req, { params }) {
  try {
    await databaseConnection()
    const { id } = params
    if (!id) {
      return NextResponse.json({ error: 'Vacation ID is required' }, { status: 400 })
    }

    const data = await req.json()
    // Optional: Validate that at least one field to update is present
    if (!data.title && !data.description && data.price === undefined) {
      return NextResponse.json(
        { error: 'No valid fields provided for update' },
        { status: 400 }
      )
    }
     // Optional: Only check type if price is included
    if (data.price !== undefined && typeof data.price !== 'number') {
      return NextResponse.json(
        { error: 'Please provide a price in euros.' },
        { status: 400 }
      )
    }

    const updatedVacation = await Vacation.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean()
    if (!updatedVacation) {
      return NextResponse.json({ error: 'Vacation not found' }, { status: 404 })
    }

    return NextResponse.json(updatedVacation, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE: Remove a vacation by ID
export async function DELETE(req, { params }) {
  try {
    await databaseConnection()
    const { id } = params
    if (!id) {
      return NextResponse.json({ error: 'Vacation ID is required' }, { status: 400 })
    }

    const deletedVacation = await Vacation.findByIdAndDelete(id).lean()
    if (!deletedVacation) {
      return NextResponse.json({ error: 'Vacation not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Vacation deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
