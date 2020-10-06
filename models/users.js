const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
  user_id: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  username: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  fullname: { type: String, default: 'noname' },
  is_bot: { type: Boolean, default: false },
  role: { type: String, default: 'user' },
  is_verified: { type: Boolean, default: false },
  is_blocked: { type: Boolean, default: false }
})

UserSchema.plugin(uniqueValidator, {
  message: 'sudah terdaftar!'
})
UserSchema.index({ user_id: 1 }, { unique: true })
UserSchema.index({ username: 1 }, { unique: true })

module.exports = mongoose.model('User', UserSchema)
