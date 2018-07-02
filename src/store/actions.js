import * as types from './types' 

export default {
    increment: ({commit}) => {
        commit(types.ADD)
    },
    decrement: ({commit}) => {
        commit(types.REDUCE)
    },
    /**
     * 如果把mutations.js中的state拆出去，后面也不需要state.mutations这么写了
     */
    clickOdd: ({commit, state}) => {  // 如果index.js用了扩展运算符，这里就不用mutations。否则就需要state.mutations
        if (state.mutations.count % 2 == 0) { // 这里为什么state.count拿不到数据，而需要用state.mutations.count?因为index.js导出的是一个对象
            commit(types.ADD)
        }
    },
    clickAsync: ({commit})=> {
        new Promise((resolve) => {
            setTimeout(function() {
                commit(types.ADD)
            }, 1000)
        })
    }
}