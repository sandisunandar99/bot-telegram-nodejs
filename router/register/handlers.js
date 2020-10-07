const { getMessage } = require('telegraf-router')
const { registerService } = require('../../services')
const { userValidation, listMenu } = require('../../helpers')

const checkRegistered = async ({ ctx, params, router }) => {
  const from = ctx.from
  const user = ctx.from.username
  const result = await registerService.checkRegistered(from)

  if (result.data === null) {
    await ctx.reply(`Hi.. @${user} anda belum terdaftar di sistem kami \nsilahkan klik tombol di bawah ini.`, {
      reply_markup: {
        remove_keyboard: true,
        inline_keyboard: [
          [{ text: 'Register', callback_data: 'redirect:/form/register' }]
        ]
      }
    })
  } else {
    const role = result.data.role
    const menus = await listMenu.listMenu(role)
    await ctx.reply(`Hi.. @${user} silahkan pilih menu dibawah ini`, {
      reply_markup: {
        remove_keyboard: false,
        keyboard: menus
      }
    })
  }

  return true
}

const RegisterScene = async ({ ctx, params, router }) => {
  await ctx.reply('Silahkan ketikan nama anda.')
  return true
}

const MessageScene = async ({ ctx, params, router }) => {
  const message = getMessage(ctx)
  console.log(message)
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
  checkRegistered,
  RegisterScene,
  MessageScene
}
