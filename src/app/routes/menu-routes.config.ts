import {RouteInfo} from './menu.metadata';

/* Sidebar menu Routes and data */
export const ROUTES: RouteInfo[] = [

    {
        id: 'menu.home',
        path: '/home',
        title: 'Home',
        icon: 'home',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        id: 'menu.main.country',
        path: '/countries',
        title: 'Countries',
        icon: 'flag',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        id: 'menu.main.team',
        path: '/federations',
        title: 'Federations',
        icon: 'explore',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [],
        contextual: true,
        context: 'competition'
    },
    {
        path: 'https://wwww.bedoyatech.ca/',
        title: 'BT',
        icon: 'link',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: true,
        submenu: []
    },
];
