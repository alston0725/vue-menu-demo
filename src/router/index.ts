import { createRouter, createWebHistory } from 'vue-router'
import MenuList from '../views/MenuList.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: MenuList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory('/vue-menu-demo/'),
  routes
})

export default router 