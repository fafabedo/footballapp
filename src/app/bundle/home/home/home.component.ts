import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {Homepage} from '../model/homepage.model';
import {DomSanitizer} from '@angular/platform-browser';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';
import {CompetitionService} from '../../competition/service/competition.service';
import {Competition} from '@app/api-platform/interfaces/competition';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {CompetitionSeasonService} from '../../competition/service/competition-season.service';

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
              private competitionSeasonService: CompetitionSeasonService) {}

  ngOnInit() {
    this.competitionService
      .getCompetitions()
      .subscribe(competitions => this.competitions = competitions.filter(competition => competition.isFeatured === true));
  }

  sanitizeImage(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  activeCompetition(competition: Competition) {
    this.competitionSeasonService.getCompetitionSeasons(competition.id)
      .subscribe(competitionSeasons => {
        const activeSeasons = competitionSeasons.filter(season => season.archive === false);
        if (activeSeasons) {
          this.competitionService.setActiveCompetition(competition, activeSeasons[0]);
          this.router.navigate(['competition', activeSeasons[0].id, 'home']);
        } else {
          console.log('there is no active season');
        }
      });
  }


}

