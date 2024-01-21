<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ComponentIs hello="I am fine"/>
    {{message}} 
  
    <h1>The 'activated' Lifecycle Hook</h1>
  <p>In this example for the 'activated' hook we check if the component is cached properly with &lt;KeepAlive&gt;.</p>
  <p>If the component is cached properly with &lt;KeepAlive&gt; we expect the 'mounted' hook to run once the first time the component is included (must be added to the DOM the first time), and we expect the 'activated' hook to run every time the component is included (also the first time).</p>
  <button @click="this.activeComp = !this.activeComp">Include component</button>
  <div>
    <KeepAlive>
      <info-box v-if="activeComp"></info-box>
    </KeepAlive>
  </div>
  </div>
</template>

<script>
import ComponentIs from './built-in-elements/ComponentIs.vue'
import InfoBox from './component-instance/InfoBox.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    ComponentIs,
    InfoBox
  },
  data() {
    return {
      color:'red',
      toggle:true,
      message: 'HELLO',
      activeComp: false
    }
   
  }, computed:{
      status() {
        if(this.toggle)
        {
         
          return 'active';
        } else {
          return 'inactive';
        }
        
      }
    },
    methods:{
      clicked() {
        if(this.toggle) {
          this.color = "blue";
        } else {
          this.color = "green";
        }
        this.toggle = !this.toggle;
      },
      receiveEmit(msg) {
      this.message = msg;
    }
    }

    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
