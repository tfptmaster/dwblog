<script setup>
import { ref } from 'vue';
import {useWindowSize} from '../helpers/composables/useWindow';
import DesktopNav from './DesktopNav.vue';
import MobileNav from './MobileNav.vue';

defineProps({
    title : {
        type: String,
        default: 'Blog',
        required: false
    }
})

const isOpen = ref(false)
const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
}

const {desktop, mobile, screenWidth} = useWindowSize()

</script>

<template>
    <!-- Header -->
    <header class="p-6 shadow bg-emerald-800 text-white">
        <div class="container mx-auto flex justify-between items-center">
            <!-- logo du site -->
            <h3 class="font-bold text-2xl text-center">{{ title }} {{ screenWidth }}</h3>
            <!-- nav xl -->
            <DesktopNav  v-if="desktop" />

             <!-- nav mobile -->
             <i
               v-if="mobile"
               @click="toggleIsOpen"
               :class="`pi ${!isOpen ? 'pi-align-justify' : 'pi-times'}`"
             ></i>
             <MobileNav  v-if="isOpen && mobile" />

        </div>
       
    </header>
</template>
<style></style>