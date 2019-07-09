// Sidebar route metadata
export interface RouteInfo {
  id?: string;
  path: string;
  title: string;
  icon: string;
  class: string;
  badge: string;
  badgeClass: string;
  isExternalLink: boolean;
  submenu: RouteInfo[];
  roles?: Array<any>;
  contextual?: boolean;
  context?: string;
}
