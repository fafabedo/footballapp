import {Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ThemesService} from '../core/themes/themes.service';
import {SettingsService} from '../core/settings/settings.service';
import {CompetitionService} from '../bundle/competition/service/competition.service';
import {Competition} from '@app/api-platform/interfaces/competition';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenuItem} from '../core/menu/menu-item';
import {MenuService} from '../core/menu/menu.service';

@Component({
  selector: 'app-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(SidebarComponent, {static: false})
  activeCompetition: Competition;
  isCollapsed = false;
  collapsed = true;
  collapsible = true;
  drawerOpened = true;
  screenWidth: any;
  sidebarComponent: SidebarComponent;
  menuItems: Array<MenuItem> = [];

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  constructor(private settingsService: SettingsService,
              private themeService: ThemesService,
              private menuService: MenuService,
              private competitionService: CompetitionService) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.isCollapsed = this.settingsService.layout.isCollapsed;
    this.themeService.setTheme(this.settingsService.layout.theme);
    this.drawerOpened = this.opened();
    this.buildMenu();
  }

  opened(): boolean {
    return this.screenWidth >= 720;
  }

  toggle(value) {
    if (this.collapsed !== value) {
      this.collapsed = value;
    }
  }

  onActivate(event: any): void {
    this.buildMenu();
  }

  buildMenu() {
    if (this.competitionService.activeCompetition) {
      this.menuService.context = this.menuService.COMPETITION;
      this.menuService.contextId = this.competitionService.activeCompetition.id;
    } else {
      delete this.menuService.context;
      delete this.menuService.contextId;
    }
    this.menuItems = this.menuService.getMenu();
  }


}
