import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main"
import BlockPage from "@/pages/BlockPage"
import TransactionPage from "@/pages/TransactionPage"

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/block/:blockNumberOrHash",
        component: BlockPage
    },
    {
        path: "/transaction/:transactionHash",
        component: TransactionPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router