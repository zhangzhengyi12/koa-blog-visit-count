const Koa = require('koa')
const views = require('koa-views')
const KoaRouter = require('koa-router')
const path = require('path')

const Router = KoaRouter()
const app = new Koa()
app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
)


const CountControl = require('./control/Count')
Router.get('/blogSup/count', CountControl)

app.use(Router.routes())
app.listen(8005)
