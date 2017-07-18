<template>
    <div>  
        <button @click='getNum'>addest</button>
        <button @click='setNum'>minusest</button>
      
    </div>
</template>
<script>
export default {
    name: 'CkBodyItem',
    data() {
        return {
            time:2        
        }
    },
   computed: {      
    },
    methods: { 
        getNum(){
            this.$store.commit('addest',this.time)
        },
        setNum(){
            this.$store.commit('minusest',this.time)
        }  
    }
}
</script>