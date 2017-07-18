<template>
    <div >
      <ck-header></ck-header>
      <ck-body></ck-body>
        <ck-footer></ck-footer>
    </div>
</template>
<script>
import CkBody from './body.vue'
import CkFooter from './footer.vue'
export default {
    name: 'app',
    data() {
        return { 
        }
    },
     components: {
        'ck-body':CkBody,
        'ck-footer':CkFooter
    },
    methods: {
        } 
}
</script>
