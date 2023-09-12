<script setup>
import { computed, ref } from 'vue';
import StateCard from '../components/StateCard.vue';
import PostCard from '../components/PostCard.vue';

const stats = ref([
    {number:1, title:"Site francophone", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:100, title:"Réferences", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
    {number:357, title:"Articles", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
])

const articles = ref([
    {
        id:1, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:2, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:3, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:4, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:5, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:6, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:7, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:8, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:9, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id:10, 
        title:"Vue 2.7 'Naruto' Released", 
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: "In UMD and CJS builds, these APIs are exposed as properties on the global Vue object When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds. Behavior Differences from Vue 3 The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system: All Vue 2 change detection caveats still apply. reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means: Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning). Reactivity APIs ignore properties with symbol keys. In addition, the following features are explicitly NOT ported: ❌ createApp() (Vue 2 doesn't have isolated app scope) ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization) ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser) ❌ Reactivity transform (still experimental) ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).",
        category: "JavaScript",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },

])

const lastArticles = computed(() => {
    return articles.value.slice(0,4)
})
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
                    <div class="sm:grid my-10 gap-5 md:grid-cols-3 xl:grid-cols-4">
                        <PostCard
                          v-for="article in lastArticles" 
                          :key="article.id"
                          :article="article"
                        />
                    </div>
                </div>   
            </section>
        </div>
    </main>
</template>

<style></style>