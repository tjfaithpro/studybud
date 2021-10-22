import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Multistep from "@/views/Multistep.vue";
import Learner from "@/views/Learner.vue";

import Projects from "@/views/Profile/Projects.vue";
import LearningGroup from "@/views/Profile/LearningGroup.vue";
import GroupPanel from "@/components/Learner/GroupPanel.vue";

import AdminLayout from '@/views/admin/layout.vue'
import Overview from '@/views/admin/overview.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "Sign Up - StudyBud",
    component: Multistep,
  },
  {
    path: "/profile",
    name: "StudyBud - Learner Profile",
    component: Learner,
    children: [
      {
        path: "",
        name: "Projects",
        component: Projects,
      },
      {
        path: "learning-group",
        name: "Learning Group",
        component: LearningGroup,
        children: [
          {
            path: "html5",
            name: "HTML5",
            component: GroupPanel,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin page',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Overview',
        component: Overview
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;