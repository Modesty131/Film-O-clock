import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  text: String,
  rating: Number
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;
