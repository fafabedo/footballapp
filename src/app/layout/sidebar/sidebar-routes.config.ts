import {RouteInfo} from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
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
        path: '/news',
        title: 'News',
        icon: 'ft-message-square',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/teams',
        title: 'Teams',
        icon: 'ft-users',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/fixture',
        title: 'Fixture',
        icon: 'ft-calendar',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/fixture/matches',
                title: 'Matches',
                icon: 'ft-list',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/fixture/groups',
                title: 'Groups',
                icon: 'ft-layout',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/stadium',
        title: 'Stadiums',
        icon: 'ft-compass',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Charts',
        icon: 'ft-bar-chart-2',
        class: 'has-sub',
        badge: '2',
        badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'ChartJs',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/charts/chartist',
                title: 'Chartist',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/charts/ngx',
                title: 'NGX Chart',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: 'https://pixinvent.ticksy.com/',
        title: 'Support',
        icon: 'ft-life-buoy',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: true,
        submenu: []
    },
];
