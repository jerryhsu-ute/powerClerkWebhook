const koa = require('koa')
const bodyParser = require('koa-bodyparser');

const app = new koa()
app.use(bodyParser());

const body = {
    name: "hello from Jerry"
}

app.use(async (ctx) => {
    console.log('0000', ctx.request.body)
    ctx.body = JSON.stringify(body)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))