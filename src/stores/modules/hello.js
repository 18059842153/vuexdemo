const state = {
    count: 3
}

const getters = {
    yes(state){
        return state.count
    }
}
const actions = {}

const mutations = {
    increment(state) {
        state.count++
    },
    addest(state,time){
        state.count+=time
    },
    minusest(state,time){
        state.count-=time
    }

}
export default {
    state,
    getters,
    actions,
    mutations
}