const Router = require('@koa/router')

const router = new Router({
    prefix: '/post'
});
router.get('/', ctx => {
    ctx.body = getPosts()
});
router.post('/', ctx => {
    let post = ctx.request.body
    post - createPost(post)
    ctx.response.status = 201;
    ctx.body = post;
});
router.get('/:id', ctx => {
    const id = ctx.params.id
    ctx.body = getPosts(id)
});
module.exports =router;