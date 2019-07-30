import {MenuItem} from './menu-item';

export const MenuRoutes: MenuItem[] = [
  {
    id: 'menu.home',
    path: '/home',
    title: 'Home',
    icon: 'home',
    isExternalLink: false,
    submenu: []
  },
  {
    id: 'menu.main.country',
    path: '/countries',
    title: 'Countries',
    icon: 'flag',
    isExternalLink: false,
    submenu: []
  },
  {
    id: 'menu.main.team',
    path: '/federations',
    title: 'Federations',
    icon: 'explore',
    isExternalLink: false,
    submenu: [],
  },
  {
    path: 'https://wwww.bedoyatech.ca/',
    title: 'BedoyaTech',
    icon: 'link',
    isExternalLink: true,
    submenu: []
  },
  {
    id: 'menu.competition.home',
    path: '/competition/{id}/home',
    title: 'Home',
    icon: 'home',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  },
  {
    id: 'menu.competition.matches',
    path: '/competition/{id}/matches',
    title: 'Matches',
    icon: 'calendar_today',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  },
  {
    id: 'menu.competition.table',
    path: '/competition/{id}/table',
    title: 'Table',
    icon: 'table_chart',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  },
  {
    id: 'menu.competition.stats',
    path: '/competition/{id}/stats',
    title: 'Stats',
    icon: 'insert_chart',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  },
  {
    id: 'menu.competition.settings',
    path: '/competition/{id}/settings',
    title: 'Settings',
    icon: 'settings',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  },
  {
    id: 'menu.competition.close',
    path: '/competition/{id}/close',
    title: 'Return',
    icon: 'undo',
    isExternalLink: false,
    contextual: true,
    context: 'competition',
    submenu: []
  }
];
