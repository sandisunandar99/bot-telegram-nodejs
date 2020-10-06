require('dotenv').config()
const { Router } = require('telegraf-router')
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const routes = require('./router')
const mongoose = require('mongoose')
const config = require('./config')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())

// middleware
bot.use(async (ctx, next) => {
  require('./middleware/respose_time').responseTime(ctx, next)
})

mongoose.connect(config.database.uri, config.database.options, async (err, db) => {
  if (err) console.log(err)

  new Router({
    bot,
    routes,
    errorCb: ({ ctx }) => {
      ctx.reply(`Ooops, encountered an error for ${ctx.updateType}`)
    }
  })

  bot.launch()
})
