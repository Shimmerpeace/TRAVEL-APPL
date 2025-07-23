import mongoose from "mongoose";
const { Schema } = mongoose;

const VacationSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  hotelsIncluded: [String], // hotel ids
  flightsIncluded: [String], // flight ids
  availableDates: [String],
  details: String,
  images: [String]
});

export default mongoose.models.Vacation || mongoose.model("Vacation", VacationSchema);

