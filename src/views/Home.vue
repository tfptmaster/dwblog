<script setup>
import { ref } from 'vue';
import StateCard from '../components/StateCard.vue';

const stats = ref([
    {number:1, title:"Site francophone", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:100, title:"Réferences", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:357, title:"Articles", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
])
</script>

<template>
    <main>
        <div>
            <section></section>
            <section class="my-20">
                <div>
                    <h2 class="text-2xl font-bold mb-2">Quelques Chiffres</h2>
                    <div class="h-1 w-40 bg-emerald-500 rounded"></div>
                    <div class="sm:grid my-10 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        <StateCard
                          v-for="(stat, index) in stats" 
                          :key="index"
                          :stat="stat"
                        />
                    </div>
                </div>   
            </section>
        </div>
    </main>
</template>

<style></style>