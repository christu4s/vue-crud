import { createApp } from 'vue'
import App from './App.vue'
import HelloUniverse from './HelloUniverse'


const app = createApp(App);
app.component('hello-universe',HelloUniverse);

app.mount('#app')
