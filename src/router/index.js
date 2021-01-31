import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/AppHome';
import AppAbout from '../components/AppAbout';
import AppContact from '../components/AppContact';
import PageNotFound from '../components/PageNotFound';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/about',
        name: 'About',
        component: AppAbout
    },
    {
        path: '/contact',
        name: 'Contact',
        component: AppContact
    },
    {
        path: '/:notFound(.*)',
        component: PageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
