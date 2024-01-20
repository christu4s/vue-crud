<template>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <IamIn content="I am coming"/>
  <RefAttribute />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IamIn from './components/IamIn.vue'
import RefAttribute from './components/built-in-attribute/RefAttribute.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    IamIn,
    RefAttribute
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
