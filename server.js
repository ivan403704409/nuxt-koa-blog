var Koa = require('koa')
var app = new Koa()
var cors = require('koa2-cors');
import { getUsers } from './model/user.js'

app.use(cors());


app.use(async (ctx, next) => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  let user = await getUsers()
  console.log(user)
  ctx.body = user
})

app.listen(9001)