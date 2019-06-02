import {RouteInfo} from './menu.metadata';

/* Sidebar menu Routes and data */
export const ROUTES: RouteInfo[] = [

    {
        id: 'menu.home',
        path: '/home',
        title: 'Home',
        icon: 'ft-home',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        id: 'menu.main.country',
        path: '/country',
        title: 'Countries',
        icon: 'ft-message-square',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        id: 'menu.main.team',
        path: '/teams',
        title: 'Teams',
        icon: 'ft-users',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        contextual: true,
        context: 'competition'
    },
    {
        path: 'https://fabricio.bedoyatech.ca/',
        title: 'Support',
        icon: 'ft-life-buoy',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: true,
        submenu: []
    },
];
