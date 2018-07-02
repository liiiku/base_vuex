/**
 * 未采用官方实例结构
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    count: 10
}

// 处理状态、数据变化
const mutations = {
    add: (state) => {
        console.log(2)
        state.count++
    },
    reduce: (state) => {
        state.count--
    }
}

// 处理你要干什么，异步请求，判断，流程控制
const actions = {
    increment: ({commit}) => {
        console.log(1)
        commit('add')
    },
    decrement: ({commit}) => {
        commit('reduce')
    },
    clickOdd: ({commit, state}) => { // 这个state是谁，就是上面的state对象
        if (state.count % 2 == 0) {
            console.log(3)
            commit('add')
        }
    },
    clickAsync: ({commit}) => {
        new Promise((resolve) => {
            setTimeout(function() {
                commit('add')

                resolve()
            }, 1000)
        })
    }
}

const getters = {
    count(state) {
        return state.count
    },
    getOdd(state) {
        return state.count % 2 == 0 ? '偶数' : '奇数'
    }
}

// 需要导出store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
