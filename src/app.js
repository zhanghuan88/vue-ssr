import Vue from 'vue'
import App from './App.vue'
import createRouter from "./router"
import createStore from "./store"
// 服务端渲染时 每次请求都会创建一个新的实例
export default () => {
    const router = createRouter();
    const store = createStore()
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app, router, store}
}

