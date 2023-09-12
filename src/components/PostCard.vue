<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full h-[256px] object-cover" :src= "article.image" :alt= "article.title"/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ article.title }}</div>
        <p class="text-gray-700 text-base">
          {{ truncate(article.content, 150) }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ article.category }}</span>

      </div>
    </div>
</template>

<script setup>
defineProps({
    article : {
        type: Object
    }
})

const truncate = (value, n) => {
    if(value.length > n) {
        return value.slice(0, n - 4) + "..."
    } else {
        return value
    }

}
</script>

<style>
</style>