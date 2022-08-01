import { createWebHistory, createRouter } from "vue-router";
import store from '../store'

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("@/views/admin/Dashboard.vue"),
      },
      {
        path: "/food/:id",
        component: () => import("@/views/admin/FoodDetail.vue"),
      },
      {
        path: "/cart",
        component: () => import("@/views/admin/Cart.vue"),
      }
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("@/layouts/Auth.vue"),
    children: [
      {
        path: "/auth/login",
        component: () => import("@/views/auth/Login.vue"),
      },
      {
        path: "/auth/register",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/auth/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const routesPublic = [
  '/auth/login',
  '/auth/register'
]

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken')
  if (!routesPublic.includes(to.fullPath)) {
    if (!store.state.accessToken) {
      next('/auth/login')
    }
  }
  if (routesPublic.includes(to.fullPath)) {
    if (store.state.accessToken) {
      next('/admin')
    }
  }
  next()
})

export default router