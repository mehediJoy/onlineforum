import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Ask from "../views/Ask.vue";
import Posts from "../components/Posts.vue";

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

import Admin from "../views/Admin.vue";
import Edit from "../components/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ask",
    name: "Ask",
    component: Ask,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/posts/:subname",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/posts/:id",
    name: "Edit",
    component: Edit
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
