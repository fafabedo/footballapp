import { Component, OnInit } from '@angular/core';
import {ThemesService} from '../core/themes/themes.service';
import {SettingsService} from '../core/settings/settings.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    isCollapsed: boolean = true;

    constructor(private settingsService: SettingsService,
                private themeService: ThemesService) { }

    ngOnInit() {
        this.isCollapsed = this.settingsService.layout.isCollapsed;
        this.themeService.setTheme(this.settingsService.layout.theme);
    }

}
