<template>
    <div class="mt-8 space-y-4 shadow-lg p-4">
        <h3 class="text-6xl text-emerald-500">{{ stat.number }}</h3>
        <h4 class="text-2xl text-emerald-800">{{ stat.title }}</h4>
        <p>{{ stat.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    stat : {
        type: Object
    }
})

</script>

<style>
</style>