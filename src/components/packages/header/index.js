import CkHeader from './src/header.vue'

/* istanbul ignore next */
CkHeader.install = function(Vue) {
    Vue.component(CkHeader.name, CkHeader)
}

export default CkHeader