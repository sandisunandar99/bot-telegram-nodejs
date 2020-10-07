const handlers = require('./handlers')

const routes = [
  {
    path: 'check-register',
    children: [
      {
        path: '',
        action: handlers.checkRegistered
      },
      {
        path: '/message',
        action: handlers.MessageScene
      }
    ]
  },
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
