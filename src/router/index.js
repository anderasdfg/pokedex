import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Search from '../views/Search.vue'
const routes = [{
        path: '/',
        name: 'welcome',
        component: Welcome
    }, {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Loader.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router