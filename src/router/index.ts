import { createRouter, createWebHistory } from 'vue-router'
import WWView from '@/views/ww/WWView.vue'
import YunmoView from '@/views/yw/YunmoView.vue'
import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'Weiwen',
            path: '/ww',
            component: WWView,
        },
        {
            name: 'Yunmo',
            path: '/ym',
            component: YunmoView,
        },
        {
            name: 'SignIn',
            path: '/sign-in',
            component: SignInView,
        },
        {
            name: 'SignUp',
            path: '/sign-up',
            component: SignUpView,
        },
    ],
})

export default router
