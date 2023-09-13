<script setup>
import { onMounted, ref } from 'vue';
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const {id} = route.params

const currentArticle = ref([]);
const loading = ref(false);
const error = ref("")

const API_URL = `http://localhost:3000/posts/${id}`;

const fetchCurrentArticle = async () => {
    loading.value = true
    try {
        const {data} = await axios.get(API_URL);
        currentArticle.value = data
       
    } catch (e) {
        error.value = e    
    } finally {
        loading.value = false
    }
};

onMounted(() => {
    fetchCurrentArticle()
});
</script>

<template>
    <h1>Details de l'article</h1>
    <p v-if="currentArticle">{{ currentArticle.title }}</p>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Chargement en cours....</p>
</template>

<style>
</style>