import Vue from 'vue';
import VueRouter from "vue-router";
import Main from "../Pages/Main";
import News from "../Pages/NewsPage";
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    },
    {
      path: '/news',
      component: News,
      name: 'News'
    }
  ]
})