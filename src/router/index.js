import Vue from 'vue';
import VueRouter from "vue-router";
import oneShop from "@/pages/oneShop";
import logIn from "@/pages/logIn";
import accountRegistration from "@/pages/accountRegistration";
import productDetails from "@/pages/productDetails";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect: 'oneShop'
        },
        {
            path:'/oneShop',
            component: oneShop
        },
        {
            path:'/login',
            component:logIn
        },
        {
            path:'/registration',
            component:accountRegistration
        },
        {
            path:'/product',
            component:productDetails,
            meta: {
                keepAlive: true,
                scrollTop: 0,
            },
        }
    ]
})