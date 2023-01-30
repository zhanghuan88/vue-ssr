const Koa = require('koa');
const Router = require('koa-router');
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs')
const path = require('path')
const vm = new Vue({
    data: {
        name: "test"
    },
    template: `
      <div>hello {{ name }}</div>
    `
})
const app = new Koa();
const router = new Router();
const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')
router.get('/', async (ctx) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = await VueServerRenderer.createRenderer({
        template
    }).renderToStream(vm);
})
app.use(router.routes());
app.listen(3000);
