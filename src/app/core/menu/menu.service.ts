import {Injectable} from '@angular/core';
import {MenuItem} from './menu-item';
import {MenuRoutes} from './menu-routes.config';

@Injectable()
export class MenuService {
  COMPETITION = 'competition';
  menuItems: Array<MenuItem> = MenuRoutes;
  context: string;
  contextId: any;

  constructor() {
  }

  // addMenu(items: Array<MenuItem>) {
  //   items.forEach((item) => {
  //     this.menuItems.push(item);
  //   });
  // }

  getMenu(): Array<MenuItem> {
    switch (this.context) {
      case this.COMPETITION: {
        const menuRoutes: Array<MenuItem> = [];
        this.menuItems.forEach(menuItem => {
          if (menuItem.context === this.COMPETITION) {
            menuItem.path = menuItem.path.replace('{id}', this.contextId);
            menuRoutes.push(menuItem);
          }
        });
        return menuRoutes;
      }
      default: {
        return this.menuItems.filter(menuItem => !menuItem.contextual);
      }

    }
  }

}
