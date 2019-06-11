import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      components: require("../views/login/index.vue"),
      hidden: true
    },
  ],
  // mode: "history"
})
