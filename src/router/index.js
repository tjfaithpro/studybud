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
import Student from '@/views/admin/student.vue'
import Content from '@/views/admin/content.vue'
import Courses from '@/views/admin/courses.vue'
import CoursesLayout from '@/views/admin/individual_course.vue'
import Groups from '@/views/admin/groups.vue'
import Settings from '@/views/admin/settings.vue'


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
      },
      {
        path: '/admin/student',
        name: 'Student',
        component: Student
      },
      {
        path: '/admin/content',
        name: 'Content',
        component: Content
      },
      {
        path: '/admin/courses',
        name: 'courses',
        component: Courses,
        children:[
          {
            path: '/admin/courses/',
            name: 'courses',
            component:CoursesLayout
            },
          {
          path: '/admin/courses/:courseName',
          name: 'courses',
          component:CoursesLayout
          }
        ]
      },
      {
        path: '/admin/groups',
        name: 'Groups',
        component: Groups
      },
      {
        path: '/admin/settings',
        name: 'Settings',
        component: Settings
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;