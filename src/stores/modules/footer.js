const state = {
    dispaly:'block'
}

const getters = {

}


const mutations = {
    xianshi(state){
           state.dispaly='none'
    },
    yincang(state){
        state.dispaly='block'
    }

}

const actions = {}
export default {
    state,
    getters,
    actions,
    mutations
}