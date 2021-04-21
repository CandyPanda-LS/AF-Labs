const Router = require('@koa/router')
const {createPost,getPost,getPosts,deletePost,updatePost} = require("../api/posts.api")

const router = new Router({
    prefix: '/post'
});
router.get('/', async ctx => {
    ctx.body = await getPosts();
});
router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});
router.get('/:id', async ctx => {
    const id = ctx.params.id
    ctx.body = await getPost(id)
});
router.delete('/:id', async ctx => {
    const id = ctx.params.id
    ctx.body = await deletePost(id)
});
router.put('/:id', async ctx => {
    const id = ctx.params.id
    let post = ctx.request.body;
    ctx.body = await updatePost(id,post)
});

module.exports =router;
