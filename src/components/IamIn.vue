<template>
    <KeepAliveCmp />
        <h1>food item </h1>
        <button @click="removeItem">Remove Item</button>
        <table border="1px solid black"><tr><th>Name</th><th>Description</th><th>isFavorite</th></tr>
    <FoodItem v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite"/>
     </table>
     <TransitionCmp />
</template>

<script>
import FoodItem from './built-in-attribute/FoodItem.vue'
import KeepAliveCmp from './build-in-components/KeepAliveCmp.vue'
import TransitionCmp from './build-in-components/TransitionCmp.vue'
export default {
    name: 'iam-in',
    props: { content: String },
    components:{
        FoodItem,
        KeepAliveCmp,
        TransitionCmp
    },
    data() {
        return {
            foods: [{
                name: "pizza", desc: "pizzapizzapizzapizzapizzapizza",favorite:true,
            },
            { name: "Puffs", desc: "puffssspuffssspuffssspuffssspuffssspuffsss",favorite:true, },
            { name: "jillleabee", desc: "jillleabeejillleabeejillleabeejillleabeejillleabee",favorite:true, }
            ]
        }
    },
    methods:{
        removeItem() {
          
            this.foods.splice(1,1);
        }
    }
}
</script>