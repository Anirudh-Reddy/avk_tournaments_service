import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true
  },
  sport: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    default: 'System'
  }
}, {
  timestamps: true
});
const AnnouncementSchema = mongoose.model('Announcement', announcementSchema);
export default AnnouncementSchema;
