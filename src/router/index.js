import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/home/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/:notFound(.*)',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
