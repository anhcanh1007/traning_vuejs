import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Transaction from './pages/Transaction.vue';
import TransactionDetail from './pages/transaction-details.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'home-route',
        component: Home
    },
    {
        path: '/transaction',
        name: 'transaction-route',
        component: Transaction
    },
    {
        path: '/transaction/:id',
        name: 'transaction-detail-route',
        component: TransactionDetail
    },
    {
        path: '/ts',
        redirect: '/transaction'
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;