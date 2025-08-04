import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany();
  await User.create([
    { name: 'Demo User', email: 'demo@example.com', password: '123456' },
    { name: 'Jane Doe', email: 'jane@example.com', password: '123456' }
  ]);
  console.log('Seeded Users');
  process.exit();
};

seed();
