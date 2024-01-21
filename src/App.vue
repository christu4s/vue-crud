<template>
<div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <component :is="hello-universe"></component>
  <slot-comp>
    </slot-comp>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SlotComp from './components/built-in-elements/SlotComp'

export default {
  errorCaptured() {
    alert("An error occurred");
  },
  name: 'App',
  components: {
    HelloWorld,
    SlotComp
  },
  foods: [
        { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg'},
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img_pizza.svg'},
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img_rice.svg'},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg'},
        { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'img_cake.svg'}
      ]
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
