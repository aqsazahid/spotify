import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
import Library from '@/views/Library.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/library', component: Library },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
