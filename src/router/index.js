import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VantDemo from "@/components/VantDemo";
import Login from "@/views/login/Login";
import Register from "@/views/login/Register";
import Retrieve from "@/views/login/Retrieve";
import HomePage from "@/views/home/HomePage";
import PersonList from "@/views/person/PersonList";
import RoleList from "@/views/role/RoleList";
import ProductList from "@/views/product/ProductList";
import AccountList from "@/views/account/AccountList";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/retrieve',
        name: 'Retrieve',
        component: Retrieve
    },
    {
        path: '/homePage',
        name: 'HomePage',
        component: HomePage
    },
    {path: '/accountList', name: "accountList", component: AccountList},
    // {path: '/accountDetail', name: "accountDetail", component: AccountDetail},
    {path: '/personList', name: "personList", component: PersonList},
    // {path: '/personDetail', name: "personDetail", component: PersonDetail},
    {path: '/roleList', name: "roleList", component: RoleList},
    // {path: '/roleDetail', name: "roleDetail", component: RoleDetail},
    {path: '/productList', name: "productList", component: ProductList},
    // {path: '/productDetail', name: "productDetail", component: ProductDetail},

    {
        path: '/vantDemo',
        name: 'VantDemo',
        component: VantDemo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
