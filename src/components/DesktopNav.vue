<script setup></script>
<template>
    <nav>
        <ul class="flex gap-10 items-center">
            <li class="text-lg">
                <router-link to="/" >
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