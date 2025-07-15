
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
  dueDate: Date,
});
module.exports = mongoose.model('Task', TaskSchema);
