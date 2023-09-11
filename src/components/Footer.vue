<script setup>
import { ref } from "vue";

const date = ref(new Date().getFullYear())
//console.log(date);


</script>

<template>
 <footer class="bg-slate-900 text-white py-5">
   <p class="text-center font-bold uppercase">
       Blog Vue.js - {{date}} - Copyright - Tous droits réservés</p>
</footer>
  
</template>


<style>

</style>