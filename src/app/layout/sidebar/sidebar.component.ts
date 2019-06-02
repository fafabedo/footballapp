import {Component, Input, OnInit} from '@angular/core';
import {RouteInfo} from './sidebar.metadata';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ROUTES} from '../../routes/menu-routes.config';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    @Input() isCollapsed = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                public translate: TranslateService) {
    }

    ngOnInit() {
        // $.getScript('./assets/js/app-sidebar.js');
        // $.getScript('./assets/js/vertical-timeline.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
