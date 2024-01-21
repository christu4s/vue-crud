<template>
    <h2>Component</h2>
    <p>Below is a log with every time the 'mounted' or 'activated' hooks run.</p>
    <ol ref="olEl"></ol>
    <p>You can also see when these hooks run in the console.</p>
  </template>
    
  <script>
  export default {
    mounted() {
      console.log("mounted");
      const liEl = document.createElement("li");
      liEl.innerHTML = "mounted";
      this.$refs.olEl.appendChild(liEl);
    },
    activated() {
      console.log("activated");
      const liEl = document.createElement("li");
      liEl.innerHTML = "activated";
      this.$refs.olEl.appendChild(liEl);
    }
  }
  </script>
  
  <style>
    li {
      background-color: lightcoral;
      width: 5em;
    }
  </style>  