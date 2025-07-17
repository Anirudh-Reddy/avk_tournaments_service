import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  image: { type: String, required: true }, // base64 string
  caption: { type: String, default: '' },
  uploadedAt: { type: Date, default: Date.now }
});
const PhotoSchema = mongoose.model('Photo', photoSchema);
export default PhotoSchema;
