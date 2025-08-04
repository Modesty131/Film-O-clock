import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
}, { timestamps: true });

const Watchlist = mongoose.model('Watchlist', watchlistSchema);
export default Watchlist;
