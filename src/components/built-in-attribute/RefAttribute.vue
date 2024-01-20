<template>
    <h1>ref attribute</h1>
    <ul>
    <li v-for="x in fruits" ref="fruitVal" :key="x">{{ x }}</li>
    {{ displayValue }}
    <input type="number" v-model="this.name" />
    <button @click="getThirdValue">Get third value</button>
  </ul>

  <input ref="displayname" type="text" @input="getInputValue"/>
  <div ref="diplayrefvalue">...</div>
</template>

<script>
export default {
    name:"ref-attribute",
    data() {
        return {
            fruits:["apple", "orange", "banana"],
            displayValue:'',
            name:0
        }
    },
    methods: {
        getThirdValue() {
            if(this.name < this.fruits.length)
            this.displayValue = this.$refs.fruitVal[this.name].innerHTML;
        },
        getInputValue() {
            this.$refs.diplayrefvalue.innerHTML = this.$refs.displayname.value;
        }
    }
}
</script>