const koa = require('koa')
const app = new koa()

const body = {
    name: "hello from Jerry"
}

app.use(async (ctx) => {
    ctx.body = JSON.stringify(body)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))