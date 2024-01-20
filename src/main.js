import { createApp } from 'vue'
import App from './App.vue'

import CompOne from './components/built-in-attribute/CompOne.vue'
import CompTwo from './components/built-in-attribute/CompTwo.vue'


const app = createApp(App);
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
//app.component('food-item', FoodItem)
app.mount('#app')
