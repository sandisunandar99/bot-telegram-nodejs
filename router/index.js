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
          await ctx.reply('Selamat datang..')
          await router.redirect('check-register', ctx)
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
