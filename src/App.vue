<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

const myTitle = "Blog Vue.js"

</script>

<template>
  <div class="flex flex-col justify-between max-h-screen bg-white">
    <Header v-bind:title="myTitle" />
  <!-- Content -->
    <div>
      Content here
    </div>
  <!-- Footer -->
    <Footer />
  </div>

</template>

<style scoped>

</style>
