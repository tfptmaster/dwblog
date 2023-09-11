<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

const myTitle = "Blog Vue.js"

</script>

<template>
  <div class="flex flex-col justify-between min-h-screen bg-white">
    <div class="flex flex-col justify-between">
      <!-- Header -->
      <Header v-bind:title="myTitle" />

      <!-- Content -->
      <router-view />

    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<style scoped>

</style>
