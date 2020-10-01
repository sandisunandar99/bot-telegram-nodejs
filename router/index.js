const { getMessage } = require('telegraf-router')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')


const index = [
    {
        path: "start",
        action: async function StartScene({ ctx, params, router }) {
            await ctx.reply(" selamat datang ", {
                reply_markup: {
                    remove_keyboard: false,
                    inline_keyboard: [
                        [{ text: "Register", callback_data: "redirect:/form/register" }],
                        [{ text: "Lapor Tiket", callback_data: "redirect:form/tiket" }],
                    ]
                }
            })
            return true;
        }
    },
] 


// Registered Routers
const register = require('./register')


const Merge = [
    ...index,
    ...register
]


module.exports = Merge