// models/Book.js
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  type: { type: String, required: true },
  itemId: { type: String, required: true },
  user: { type: String, required: true },
  email: { type: String, required: true },
  details: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
