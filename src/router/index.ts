// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import CookiePolicy from "@/components/CookiePolicy.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cookie-policy",
    name: "CookiePolicy",
    component: CookiePolicy,
  },
  // Catch-all route for 404 - Page Not Found
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Sanitize route parameters to prevent XSS
router.beforeEach((to, from, next) => {
  for (const param in to.params) {
    if (typeof to.params[param] === "string") {
      to.params[param] = (to.params[param] as string).replace(
        /<\/?[^>]+(>|$)/g,
        ""
      );
    } else if (Array.isArray(to.params[param])) {
      to.params[param] = (to.params[param] as string[]).map((value) =>
        value.replace(/<\/?[^>]+(>|$)/g, "")
      );
    }
  }
  next();
});

export default router;
