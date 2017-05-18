var Koa = require('koa')
var app = new Koa()
var Nuxt = require('nuxt')
var config = require('./nuxt.config.js')
config.dev = !(app.env === 'production')

// require('./server.js')

import { getUsers } from './model/user.js'


var nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}


app.use(async (ctx, next) => {
  if(/\/api\/.+/.test(ctx.request.url)){
  	  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
	  let user = await getUsers()
	  ctx.body = user
  }else{
  	ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  	await nuxt.render(ctx.req, ctx.res)
  }
  next()
})



let isProduction = process.env.NODE_ENV === 'production'
let PORT = process.env.PORT || (isProduction ? 80 : 9000)
console.log(PORT)
app.listen(PORT)
