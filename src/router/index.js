import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskForm from '../views/TaskForm.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'TaskForm',
        component: TaskForm
    },
    {
        path: '/task-list',
        name: 'TaskList',
        component: () => import('../views/TaskList.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
