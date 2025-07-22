import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  pricePerNight: Number,
  availability: [
    {
      date: String,
      rooms: Number
    }
  ],
  images: [String],
  amenities: [String]
});

export default mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);
