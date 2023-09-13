<template>
    <main
      class="relative bg-gradient-to-t from-white via-emerald-100 to-emerald-800"
    >
      <div class="container mx-auto">
        <!-- Intro -->
        <div class="py-10 lg:flex justify-between items-center block">
          <div>
            <h2 class="text-5xl font-semibold mb-2 text-white">
              Tous les articles
            </h2>
            <div class="h-1 w-60 bg-emerald-500 rounded"></div>
          </div>
        </div>
        <!--Formulaire de recherche -->
        <form class="lg:flex items-center block gap-6">
          
          <!--input -->
          <input
            v-model="search"
            class="text-white bg-emerald-950 p-3 focus:outline-none focus:border-emerald-500 mt-4 border-b-4 border-emerald-50 lg:w-1/2 text-lg w-full"
            type="text"
            placeholder="Tapez votre recherche.."
          />
          <!--select -->
          <select
          v-model="categoryFilter"
          class="text-white bg-emerald-950 p-3 focus:outline-none focus:border-emerald-500 mt-4 border-b-4 border-emerald-50 lg:w-1/2 w-full text-lg"
          >
            <option value="" selected disabled default>
              Selectionner une categorie
            </option>
            <option value="Health">Health</option>
            <option value="Programming">Programming</option>
            <option value="Sport">Sport</option>
            <option value="Business">Business</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
  
          <!--reset btn -->
          <button
           v-show="search.length || categoryFilter.length"
           @click.prevent="resetFilter"
           class="text-emerald-950 text-3xl font-bold">X</button>
        </form>
  
        <!--Tous les articles -->
        <p class="text-lg font-semibold text-center my-2" v-show="articles.length">
          Résultat :
          <span class="text-emerald-200">
            {{ filteredArticles.length }}
          </span>
        </p>
        <div
          class="sm:grid my-10 gap-5 md:grid-cols-2 xl:grid-cols-4"
          v-if="filteredArticles.length"
        >
          <PostCard v-for="article in filteredArticles" :article="article" :key="article.id" />
        </div>
        <p v-if="error">{{ error }}</p>
        <div
          class="sm:grid my-10 gap-5 md:grid-cols-2 xl:grid-cols-4"
          v-if="loading"
        >
          <SkeletonPost v-for="i in 4" :key="i" />
        </div>
        <p class="text-center text-2xl" v-show="filteredArticles.length === 0">
          Aucun résultat
        </p>
      </div>
    </main>
  </template>
  
  <script setup>
  import axios from "axios";
  import { onMounted, ref, watchEffect } from "vue";
  import PostCard from "../components/PostCard.vue";
  import SkeletonPost from "../components/SkeletonPost.vue";
  
  const API_URL = "http://localhost:3000/posts";
  
  const articles = ref([]);
  const loading = ref(false);
  const error = ref("");
  
  const filteredArticles = ref([]);
  
  // filters
  const search = ref("");
  const categoryFilter = ref("")
  
  const resetFilter = () => {
      search.value = ""
      categoryFilter.value = ""
  }
  
  
  
  const fetchArticles = async () => {
    loading.value = true;
    try {
      const { data } = await axios.get(API_URL); // pause
      articles.value = data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };
  onMounted(() => {
    fetchArticles();
  });
  
  // SIDE EFFECT
  watchEffect(() => {
    filteredArticles.value = articles.value.filter(
      (article) =>
          (article.title.toLowerCase().includes(search.value.toLowerCase()) ||
           article.content.toLowerCase().includes(search.value.toLowerCase())) &&
           article.category.toLowerCase().includes(categoryFilter.value.toLowerCase())
    );
  });
  
  /*
  AMATEUR
  Créer une barre de recherche qui filtre les articles sans recharger la page selon le titre ou la description OK
  afficher un bouton X pour remettre le formulaire à 0 et remettre tout les articles OK
  Si pas de résultat afficher pas de résultat OK
  afficher le nombre de résultats OK
  créer un select pour filtrer par catégorie d'article (en dur) OK
  Les posts se récupèrent via l’api au début et le filtrage se fait en JS (méthodes des array) OK
  
  SEMI PRO
  Le filtrage se fait en temps réel avec l’api (voir la doc json-server)
  le flow : error/loading/posts doit être respecté a chaque rechargement
  
  LEGENDE
  
  Ajouter Pagination + nombre l’élément par page
  Utiliser useFetch() de vueUse
  Eviter d’envoyer trop de requetes si l’user tape vite sur la barre de recherche
  */
  </script>
  
  <style></style>
  