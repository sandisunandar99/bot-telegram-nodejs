# BOT Telegram

BOT Telegram research for any project.

## Core Stack

- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Telegraf** - [https://telegraf.js.org/#/](https://telegraf.js.org/#/)
- **Mongo DB** - [https://mongodb.github.io/node-mongodb-native/](https://mongodb.github.io/node-mongodb-native/)

## Quick Start

Clone project and install dependencies:
```bash
$ https://github.com/sandisunandar99/bot-telegram-nodejs/.git
$ cd bot-telegram-nodejs
$ docker-compose up --build
```

Start the server (optional if running without docker):
```bash
$ npm start -s
```

Run tests (tester apps):
```bash
$ npm test
```

## Project Structure
```
.
├── route/
|   ├── register/
|   |   |   └── handler.js   * Handler
|   |   |   └── index.js    * index
|   |   |   └── routes.js   * routing access
|   |   └── index.js        * Index
├── config/
|   └── index.js      * Database/ other configuration apps 
├── models/
|   └── index.js    * Index
|   └── User.js     * Users model schemas
├── services/
|   └── index.js    * Index
|   └── register.js * Register service function / controller
├── helper/
|   └── index.js    * helpers code
├── middleware/
|   └── response_time.js    * log response time process
```

## License
Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
