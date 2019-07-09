export interface MenuItem {
  id?: string;
  path: string;
  title: string;
  icon: string;
  class?: string;
  badge?: string;
  badgeClass?: string;
  isExternalLink: boolean;
  submenu?: Array<MenuItem>;
  roles?: Array<any>;
  contextual?: boolean;
  context?: string;
}
