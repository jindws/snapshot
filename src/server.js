const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const serve = require('koa-static');
const logger = require('koa-logger')
require('@babel/register');
require('@babel/polyfill');

const app = new Koa()
app.use(bodyParser())
app.use(logger())
app.use(serve('.'));

const router = require('./routes')
app.use(router.routes(),router.allowedMethods())

app.listen(3000,function(){
    console.log('server is running at 3000');
});

// export default app;
