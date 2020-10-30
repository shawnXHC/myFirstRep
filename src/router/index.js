import Vue from "vue";
import VueRouter from "vue-router";
import login from "./login";
import index from "@/views/index.vue";
Vue.use(VueRouter);

const routes = [
    ...login,
    {
        path: "/index",
        component: index,
        // name: "index",
        children: [{
                path: "search",
                component: () =>
                    import ("@/components/Search/index.vue"),
            },
            {
                path: "personal",
                component: () =>
                    import ("@/components/Personal/index.vue"),
            },
            {
                path: "changepwd",
                component: () =>
                    import ("@/components/Personal/ChangePwd"),
            },
            {
                path: "changeinfo",
                component: () =>
                    import ("@/components/Personal/ChangeInfo"),
            },
            {
                path: "subscribe",
                component: () =>
                    import ("@/components/Subscribe"),
            },
            {
                path: "",
                component: () =>
                    import ("@/components/HomePage/index.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;