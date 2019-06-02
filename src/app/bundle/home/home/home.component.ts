import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {ArticleService} from '../../news/service/article.service';
import {HomepageService} from '../service/homepage.service';
import {Homepage} from '../model/homepage.model';

import {Article} from '../../news/model/article.model';

import {DomSanitizer} from '@angular/platform-browser';

declare var require: any;


@Component({
    selector: 'app-dashboard-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [NgbCarouselConfig]
})

export class HomeComponent implements OnInit {

    constructor(private sanitizer: DomSanitizer,
                private router: Router) {

    }

    ngOnInit() {
        // $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
        // coming soon JS start working after page load
        // $.getScript('./assets/js/coming-soon/coming-soon.js');
    }


}

