import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio-details',
    name: 'PortfolioDetails',
    component: () => import( /* webpackChunkName: "about" */ '../components/PortfolioDetails.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: NotFoundPage,
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router