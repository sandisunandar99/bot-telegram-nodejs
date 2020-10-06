
// const { User } = require('../../models')
const handlers = require('./handlers')

const routes = [
  {
    path: '/form',
    children: [
      {
        path: '/register',
        children: [
          {
            children: [
              {
                path: '',
                action: handlers.RegisterScene
              },
              {
                path: '/message',
                action: handlers.MessageScene
              }
            ]
          }
        ]
      }
    ]
  }
]

module.exports = routes
