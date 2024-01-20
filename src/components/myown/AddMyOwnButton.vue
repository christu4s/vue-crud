<template>
    <input type="text" @change="changeName" v-model="name" name="name"/>
</template>
<script>
export default {
    name:"AddMyOwnButton",
    data(){
        return {
            name:'',
            contact:''
        }
    },
    components:{

    },
    props:[],
    methods:{
        changeName() {
           const newAddMyOwn = {
             name:this.name,
             contact:""
           }
           this.$emit("add-my-own-event", newAddMyOwn);
            this.name= '';
        }
    }
}
</script>