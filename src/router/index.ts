import { createRouter, createWebHashHistory } from 'vue-router'
import { articles } from "@/logic/MyLogic"

const articlesRoutes = articles.map((article) => ({
  path: `${article.id}`,
  component: () => import(`@/views/pages/${article.id}-${article.name}.vue`)
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
  scrollBehavior(to, from, savedPosition) {
    console.log(to)
    if(to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})

export default router
