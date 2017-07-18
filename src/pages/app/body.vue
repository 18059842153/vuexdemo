<template>
    <div>
        <ck-bodyitem></ck-bodyitem>
        <button @click='getcounter'>add</button>
        <ck-bodyContent></ck-bodyContent>
          <p>{{count}}</p>
          <div class="test" ></div>
    </div>
</template>
<style>
.test{
    width:500px;
    height: 300px;
    background: red;
}
</style>
<script>

import bodyItem from './bodyItem/bodyItem.vue'
import bodyContent from './bodyItem/bodycontent.vue'
export default {
    name: 'CkBody',
    data() {
        return {
            
        }
    },
     computed: {
         count(){
             return this.$store.getters.yes
         }      
    },
    components: {
        'ck-bodyitem': bodyItem,
        'ck-bodyContent': bodyContent
    },
    methods: {
    getcounter(){
        this.$store.commit('increment')
        console.log(this.$store.state.hellos.count)
    }
    }

}
</script>