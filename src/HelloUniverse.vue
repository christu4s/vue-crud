<template>
  <div>
    <h3>ChildComp.vue</h3>
    <p>This is the child componentw</p>
    <slot-comp></slot-comp>
  </div>
</template>

<style scoped>
div {
  border: solid black 1px;
  background-color: lightgreen;
  padding: 10px;
  max-width: 250px;
  margin-top: 20px;
}
</style>