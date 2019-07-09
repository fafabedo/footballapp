import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ROUTES} from '../../routes/menu-routes.config';
import {MenuService} from '../../core/menu/menu.service';
import {Competition} from '@app/api-platform/interfaces/competition';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];

  @Input() isCollapsed = false;
  @Input() competition: Competition;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public translate: TranslateService,
              private  menuService: MenuService) {
  }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  getMenu() {
    return this.menuService.getMenu();
  }

}
