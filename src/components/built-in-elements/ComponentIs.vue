<template>
    <h1>Component</h1>{{ hello }}
    <button @click="toggleStatus = !toggleStatus">{{toggleStatus?'active':'inactive'}}</button>
    <component :is="toggleOrder" >
      <li v-for="item in list" :key="item">{{ item }}</li>
    </component>

    
</template>

<script>

export default {
    name:"ComponentIs",
    props:{hello:String},
   
    data(){
        return {
            toggleStatus:true,
            list:['apple','orange','lemon','melon']
        }
    },
    computed:{
        toggleOrder() {
            if(this.toggleStatus){
                return 'ul';
            } else {
                return 'ol';
            }
        }
    }

}
</script>

<style scoped>
div {
    padding:20px;
    background-color: lightgreen;
    width:100
}
</style>