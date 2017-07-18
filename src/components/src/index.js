import header from '../packages/header'

const components = [
    header
    ]

const install = function (Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}
export default {
    version: '1.0.1',
    install,
    header,
   
}    