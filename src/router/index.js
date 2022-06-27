import { createRouter, createWebHistory } from '@ionic/vue-router';
import CardPage from '../views/Card.vue';
import HomePage from '../views/HomePage.vue';
import ListPage from '../views/List.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage
  },
  {
    path: '/card',
    name: 'Card',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
