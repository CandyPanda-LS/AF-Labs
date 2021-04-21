serve = require('koa-static')
const Koa = require('koa'),bodyPaser = require('koa-bodyparser')
require('./dal');

const HomeRouter = require('./routes/home.routes');
const PostRouter = require('./routes/post.routes');



const app = new Koa();

app.use(bodyPaser());

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello';
});
app.use(serve('public/'));

const port = 3001;
app.listen(port,err=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(`app is running on port ${port}`)
});