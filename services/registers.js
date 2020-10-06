const { User } = require('../models')

const registerUser = async (from, text) => {
  try {
    const users = new User()
    users.fullname = text
    users.username = from.username
    users.is_bot = from.is_bot
    users.user_id = from.id
    const result = await users.save()

    return { status: 'success', data: result }
  } catch (error) {
    return { status: 'error', error }
  }
}

module.exports = {
  registerUser
}
