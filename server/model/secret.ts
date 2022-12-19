import mongoose from 'mongoose';

const secretSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  remainingViews: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  expiresAt: { type: Date, default: null, index: { expireAfterSeconds: 0 } },
});

export default mongoose.model('Secret', secretSchema, 'secret');
