const Koa = require("koa");
const Router = require("koa-router");
const koaStatic = require("koa-static");
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs')
const path = require('path')

const router = new Router();
const app = new Koa();

const serverBundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.bundle.js'), 'utf8')
const template = fs.readFileSync(path.resolve(__dirname, 'dist/server.html'), 'utf8')
const render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template
})

router.get('/(.*)', async (ctx) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = await new Promise((resolve, reject) => {
        render.renderToString({url: ctx.url}, (err, html) => {
            if (err && err.code === 404) resolve("not found");
            resolve(html)
        })
    });
})
app.use(koaStatic(path.resolve(__dirname, 'dist')))
app.use(router.routes());

app.listen(3000);
