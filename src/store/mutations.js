import { ADD, REDUCE } from './types'
import getters from './getters'

const state = {
    count: 20
}

// 函数名是变量，所以这里要用方括号 window[ADD]
const mutations = {
    [ADD](state) {
        state.count++
    },
    [REDUCE](state) {
        state.count--
    }
}

export default {
    state,
    mutations,
    getters
}