import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/default/LoginForm.vue'
import DefaultVue from '@/views/default/DefaultVue.vue'
import HelloWorld from '@/views/default/HelloWorld.vue'

const routes = [
  {
    path: '/default',
    name: 'DefaultVue',
    component: DefaultVue,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    props: { msg: 'Welcome to Your Vue.js App' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
