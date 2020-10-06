const index = [
  {
    path: 'start',
    action: async function StartScene ({ ctx, params, router }) {
      await router.redirect('select-action', ctx)
      return true
    }
  },
  {
    path: 'select-action',
    children: [
      {
        path: '',
        action: async function StartScene ({ ctx, params, router }) {
          await ctx.reply('Please select action:', {
            reply_markup: {
              remove_keyboard: true,
              inline_keyboard: [
                [{ text: 'Register', callback_data: 'redirect:/form/register' }]
              ]
            }
          })
          return true
        }
      }
    ]
  }
]

// Registered Routers
const register = require('./register')

const Merge = [
  ...index,
  ...register
]

module.exports = Merge
