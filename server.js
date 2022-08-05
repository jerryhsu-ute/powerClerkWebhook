const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
    ctx.body = 'Hello World'
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))