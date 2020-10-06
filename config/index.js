const conf = {}

conf.database = {
  uri: process.env.MONGO_DB_URI,
  options: {
    keepAlive: 300000,
    connectTimeoutMS: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise,
    useFindAndModify: false,
    useCreateIndex: true
  }
}

module.exports = conf
