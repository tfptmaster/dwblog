import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue"
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Blog from "../views/Blog.vue"

// On va parametrer nos "Routes"
const router = createRouter({
    routes : [
        {
            path: "/",
            name: "Accueil",
            component: Home,
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/signup",
            name: "Inscription",
            component: Signup,
        },
        {
            path: "/blog",
            name: "Articles",
            component: Blog,
        },
    ],
    history:createWebHistory()
})

export default router