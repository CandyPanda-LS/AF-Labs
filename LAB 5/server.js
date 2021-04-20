const Koa = require('koa'),bodyPaser = require('koa-bodyparser')

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
app.listen(3001,err=>{
    if(err){
        console.log(err)
        return;
    }
});