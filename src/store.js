import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () => {
    let store = new Vuex.Store({
        state: {
            name: "测试"
        },
        mutations: {
            changeName(state, payload) {
                state.name = payload
            }
        },
        actions: {
            changeName({commit}) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('changeName', "ceshi")
                        resolve();
                    }, 1000)
                })
            }
        }
    })
    if (typeof window != 'undefined' && window.__INITIAL_STATE__) { // 服务费的state挂在这个属性上,有这个属性,客户端state需要替换成服务端的state
        store.replaceState(window.__INITIAL_STATE__)
    }
    return store
}
