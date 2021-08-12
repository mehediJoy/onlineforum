import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Ask from "../views/Ask.vue";
import Auth from "../views/Auth.vue";
import Posts from "../components/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ask",
    name: "Ask",
    component: Ask
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/posts/:subname",
    name: "Posts",
    component: Posts
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
