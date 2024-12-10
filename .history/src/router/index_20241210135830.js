import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/views/AppHome.vue';
import Search from '@/views/Search.vue';
import Library from '@/views/Library.vue';

const routes = [
  { path: '/', component: AppHome },
  { path: '/search', component: Search },
  { path: '/library', component: Library },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
