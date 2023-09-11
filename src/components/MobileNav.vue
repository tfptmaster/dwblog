<script setup></script>
<template>
    <nav
        class="flex flex-col items-center border-1 p-4 absolute top-0 right-0 w-full bg-black mt-16 z-10">
        <ul class="space-y-4">
            <li class="text-lg">
                <router-link to="/">
                    Accueil
                </router-link>
            </li>
            <li class="text-lg">
                <router-link to="/blog">
                    Articles
                </router-link>
            </li>
            <li class="text-lg">
                <router-link to="/contact">
                    Contact
                </router-link>
            </li>
            <li class="text-lg">
                <router-link to="/login">
                    Login
                </router-link>
            </li>
            <li class="text-lg">
                <router-link to="/signup">
                    Inscription
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<style>
.router-link-active {
    border-bottom: 3px solid #98d56c;
    color: #98d56c;
    font-weight: 600;
}
</style>