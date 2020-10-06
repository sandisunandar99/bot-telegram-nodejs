const { getMessage } = require('telegraf-router')
const { registerService } = require('../../services')
const { userValidation } = require('../../helpers')

const RegisterScene = async ({ ctx, params, router }) => {
  await ctx.reply('Silahkan ketikan nama anda.')
  return true
}

const MessageScene = async ({ ctx, params, router }) => {
  const text = getMessage(ctx).text
  const from = ctx.from
  const result = await registerService.registerUser(from, text)

  if (result.status === 'success') {
    await ctx.replyWithHTML(`Hi <b>${getMessage(ctx).text}</b>! \nakun ada sudah didaftarkan tunggu konfirmasi dari kami ya.. \nTerimakasi`)
  } else {
    const error = userValidation.constructUserErrorResponse(result.error)
    await ctx.reply(`Hi ${error.message}`)
  }

  return true
}

module.exports = {
  RegisterScene,
  MessageScene
}
