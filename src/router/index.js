import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import Contact from "../views/Contact.vue"
// import Login from "../views/Login.vue"
// import Signup from "../views/Signup.vue"
// import Blog from "../views/Blog.vue"

// Lazy-loading : conseillé dans la majorité des cas
// Vite : cf vite.config "rollup"
const Home = () => import("../views/Home.vue")
const Contact = () => import("../views/Contact.vue")
const Login = () => import("../views/Login.vue")
const Signup = () => import("../views/Signup.vue")
const Blog = () => import("../views/Blog.vue")
const ArticleDetails = () => import("../views/ArticleDetail.vue")

const NotFound = () => import("../views/NotFound.vue")

// On va parametrer nos "Routes"
const router = createRouter({
    routes : [
        {
            path: "/",
            name: "Accueil",
            component: Home,
            meta: {
                title: "Accueil",
            }
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
            meta: {
                title: "Contact",
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            meta: {
                title: "Login",
            }
        },
        {
            path: "/signup",
            name: "Inscription",
            component: Signup,
            meta: {
                title: "Inscription",
            }
        },
        {
            path: "/blog",
            name: "Articles",
            component: Blog,
            meta: {
                title: "Articles",
            }
        },
        {
            path: "/details/:id/",
            name: "ArticleDetails",
            component: ArticleDetails,
            meta: {
                title: "Articles",
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: "NotFound",
            component: NotFound,
            meta: {
                title: "404",
            }
        }
    ],
    history:createWebHistory()
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Blog Vue.js`
    // console.log(to);
    next()
})

export default router