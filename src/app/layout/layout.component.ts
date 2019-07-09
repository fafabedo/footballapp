import {Component, HostListener, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ThemesService} from '../core/themes/themes.service';
import {SettingsService} from '../core/settings/settings.service';

@Component({
  selector: 'app-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  collapsed = true;
  collapsible = true;
  drawerOpened = true;
  screenWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  constructor(private settingsService: SettingsService,
              private themeService: ThemesService) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.isCollapsed = this.settingsService.layout.isCollapsed;
    this.themeService.setTheme(this.settingsService.layout.theme);
    this.drawerOpened = this.opened();
  }



  opened(): boolean {
    return this.screenWidth >= 720;
  }

  toggle(value) {
    if (this.collapsed !== value) {
      this.collapsed = value;
    }
  }

}
