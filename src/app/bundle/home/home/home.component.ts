import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {Homepage} from '../model/homepage.model';
import {DomSanitizer} from '@angular/platform-browser';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionService} from '../../competition/service/competition.service';
import {Competition} from '@app/api-platform/interfaces/competition';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';

declare var require: any;

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent implements OnInit {
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Homepage',
      active: true
    }
  ];
  competitions: Array<Competition> = [];

  constructor(private sanitizer: DomSanitizer,
              private router: Router,
              private competitionService: CompetitionService,
              private apiPlatform: ApiPlatformService) {}

  ngOnInit() {
    this.competitionService
      .getCompetitions()
      .subscribe(competitions => this.competitions = competitions.filter(competition => competition.isFeatured === true));
    // $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
    // coming soon JS start working after page load
    // $.getScript('./assets/js/coming-soon/coming-soon.js');
  }

  prepareImageSrc(src: string): string {
    return this.apiPlatform.getApiPlatformPathFiles(src);
  }

  sanitizeImage(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  activeCompetition(competition: Competition) {
    this.competitionService.setActive(competition);
    this.router.navigate(['competition', competition.id]);
  }


}

