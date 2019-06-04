import {Component, OnInit} from '@angular/core';
import {ThemesService} from '../core/themes/themes.service';
import {SettingsService} from '../core/settings/settings.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('navToggle', [
      state('toggleIn', style({
          width: '60px'
      })),
      state('toggleOut', style({
        width: '220px'
      })),
      transition('toggleIn => toggleOut', [
        animate('0.2s')
      ]),
      transition('toggleOut => toggleIn', [
        animate('0.4s')
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;
  opened = true;
  toggled = true;

  constructor(private settingsService: SettingsService,
              private themeService: ThemesService) {
  }

  ngOnInit() {
    this.isCollapsed = this.settingsService.layout.isCollapsed;
    this.themeService.setTheme(this.settingsService.layout.theme);
  }

  toggle(value) {
    if (this.toggled !== value) {
      this.toggled = value;
    }
  }

}
