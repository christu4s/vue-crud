<template>
    <h1>Keep alive</h1>
    <button @click="toggle">toggle for keep alive</button>
    <KeepAlive><component :is="ifActive" /></KeepAlive>
    <Teleport to="body" :disabled="teleportOn">
      <div id="redDiv">Hello!</div>
    </Teleport>
</template>

<script>
export default {
    name:"keep-alive-cmp",
    data(){
        return {
            toggleData:true,
            teleportOn:true
        }
    },
    methods:{
        toggle() {
            this.toggleData = !this.toggleData;
        }
    },
    computed:{
        ifActive() {
            if(this.toggleData)
            {
          return 'comp-one'
        }
        else {
          return 'comp-two'
        }
        }
    }
}
</script>