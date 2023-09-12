<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from "axios";
import StateCard from '../components/StateCard.vue';
import PostCard from '../components/PostCard.vue';
import SkeletonPost from '../components/SkeletonPost.vue';

const stats = ref([
    {number:1, title:"Site francophone", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:100, title:"Réferences", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:357, title:"Articles", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
])

const articles = ref([]);
const loading = ref(false);
const error = ref("")

const lastArticles = computed(() => {
    return articles.value.slice(0,4)
});

const API_URL = "http://localhost:3000/posts";

const fetchArticles = async () => {
    loading.value = true
    try {
        const {data} = await axios.get(API_URL);
        articles.value = data
       
    } catch (e) {
        console.log(e);
        
    } finally {
        loading.value = false
    }
};

onMounted(() => {
    fetchArticles()
});
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
            <section class="my-20">
                <div>
                    <h2 class="text-2xl font-bold mb-2">Dernières Articles</h2>
                    <div class="h-1 w-40 bg-emerald-500 rounded"></div>
                    <div class="sm:grid my-10 gap-5 md:grid-cols-3 xl:grid-cols-4" v-if="lastArticles.length">
                        <PostCard
                          v-for="article in lastArticles" 
                          :key="article.id"
                          :article="article"
                        />
                    </div>
                    <p v-if="error">{{ error }}</p>
                    <div class="sm:grid my-10 gap-5 md:grid-cols-3 xl:grid-cols-4" v-if="loading">
                        <SkeletonPost v-for="i in 4" :key="i"/>
                    </div>
                </div>   
            </section>
        </div>
    </main>
</template>

<style></style>