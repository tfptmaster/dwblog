import { computed, onMounted, onUnmounted, ref } from "vue";

export const useWindowSize = () => {
    const screenWidth = ref(window.innerWidth);
const screenHeigth = ref(window.innerHeight);

const handleResize = () => {
    // on met a jour la taille actuelle
    screenWidth.value = window.innerWidth
    screenHeigth.value = innerHeight
}

// cycle de vie nd'un composant
onMounted(() => window.addEventListener("resize", handleResize))
onUnmounted(() => window.removeEventListener("resize", handleResize))

// Computed
const mobile = computed( () => screenWidth.value <= 900)
const desktop = computed( () => screenWidth.value > 900)

return {screenHeigth, screenWidth, mobile, desktop}
}