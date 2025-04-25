import { createRouter, createWebHashHistory } from 'vue-router'
import { articles } from "@/logic/MyLogic"

const articlesRoutes = articles.map((article) => ({
  path: `${article.id}`,
  component: () => import(`@/views/page/${article.id}-${article.name}.vue`)
}))

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/tags",
      component: () => import("@/views/Tags.vue"),
    },
    {
      path: "/left",
      component: () => import("@/views/Left.vue"),
    },
    {
      path: "/right",
      component: () => import("@/views/Right.vue"),
    },
    {
      path: "/about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/article",
      children: articlesRoutes
    }
  ],
})

export default router
