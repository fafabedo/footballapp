import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartistModule} from 'ng-chartist';

import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {HomepageService} from './service/homepage.service';

import {MatchHeightModule} from '../../shared/directives/match-height.directive';

import {ArticleService} from '../news/service/article.service';
import {FederationWidgetModule} from '../federation/federation-widget.module';
import {CompetitionService} from '../competition/service/competition.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChartistModule,
    MatchHeightModule,
    FederationWidgetModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomepageService,
    ArticleService,
    CompetitionService
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule {
}
