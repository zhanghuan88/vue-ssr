// 服务端渲染
import createApp from "./app.js"

//服务器调用的时候设置了传参
export default (context) => {
    const {url} = context;
    return new Promise((resolve, reject) => {
        let {app, router, store} = createApp()
        router.push(url);
        router.onReady(() => {
            const match = router.getMatchedComponents();

            if (match.length === 0) {
                return reject({code: 404})
            } else {
                Promise.all(match.map(component => {
                    if (component.asyncData) {
                        return component.asyncData(store)
                    }
                })).then(() => {
                    context.state = store.state;
                    resolve(app);
                })
            }
        })
    })
}
