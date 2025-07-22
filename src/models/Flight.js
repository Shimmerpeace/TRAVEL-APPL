import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  departureTime: String,
  arrivalTime: String,
  duration: String,
  price: Number,
  seatsAvailable: Number,
  flightNumber: String,
  details: String
});

export default mongoose.models.Flight || mongoose.model("Flight", FlightSchema);
