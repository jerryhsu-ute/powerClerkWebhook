const koa = require('koa')
const bodyParser = require('koa-bodyparser');

const app = new koa()
app.use(bodyParser());



app.use(async (ctx) => {
    const { fields } = ctx.request.body
    const fee = fields ? fields.applicationFee : 'N/A'

    // console.log('Received PowerClerk payload: ', JSON.stringify(ctx.request.body, null, 2))
    console.log('0000', ctx.request.body)

    const body = {
        message: `Your application fee is ${fee}`
    }

    ctx.body = JSON.stringify(body)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))