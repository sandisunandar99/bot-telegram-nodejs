const responseTime = async(ctx, next) =>{
  const start = new Date()
  return next().then(() => {
    const ms = new Date() - start
    console.log('response time %s ms', ms)
    console.log("routerPath", ctx.session.routerPath);
  })
}

module.exports = {
  responseTime
}