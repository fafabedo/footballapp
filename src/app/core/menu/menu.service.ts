import {Injectable} from '@angular/core';
import {CompetitionService} from '../../bundle/competition/service/competition.service';
import {MenuItem} from './menu-item';
import {MenuRoutes} from './menu-routes.config';

@Injectable()
export class MenuService {
  menuItems: Array<MenuItem> = MenuRoutes;
  context = '';
  contextId: any;

  constructor(private competitionService: CompetitionService) {
  }

  addMenu(items: Array<MenuItem>) {
    items.forEach((item) => {
      this.menuItems.push(item);
    });
  }

  setContext() {
    const competition = this.competitionService.getActive();
    if (competition && competition.id) {
      this.context = 'competition';
      this.contextId = competition.id;
    }
  }

  getMenu() {
    this.setContext();
    switch (this.context) {
      case 'competition': {
        const menuRoutes: Array<MenuItem> = [];
        this.menuItems.forEach(menuItem => {
          if (menuItem.context === 'competition') {
            menuItem.path = menuItem.path.replace('{id}', this.contextId);
            menuRoutes.push(menuItem);
          }
        });
        return menuRoutes;
      }
      case '': {
        return this.menuItems.filter(menuItem => !menuItem.contextual);
      }
    }
  }

}
