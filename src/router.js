import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.use(VueRouter)

export default () => {
    return new VueRouter({
        mode: "history",
        routes: [
            {path: "/", component: Foo},
            {path: "/bar", component: Bar},
        ]
    });
}
